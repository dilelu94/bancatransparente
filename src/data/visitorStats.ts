export interface CountryVisitorStat {
  code: string;
  name: string;
  flag: string;
  visitors: number;
}

export function getFlagEmoji(countryCode: string): string {
  const code = (countryCode || '').toUpperCase().trim();
  if (code.length !== 2) return '🌐';
  const codePoints = code
    .split('')
    .map((c) => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function getCountryName(countryCode: string): string {
  const code = (countryCode || '').toUpperCase().trim();
  try {
    const dn = new Intl.DisplayNames(['es'], { type: 'region' });
    return dn.of(code) || code;
  } catch {
    return code;
  }
}

const STORAGE_KEY = 'bt_visitor_counts_live';
const SESSION_KEY = 'bt_session_counted_live';
const API_URL = 'https://mantledb.sh/v2/bancatransparente_live_v1/visitors';
const INCREMENT_URL = 'https://mantledb.sh/v2/increment/bancatransparente_live_v1/visitors';

export function getStoredVisitorStats(): CountryVisitorStat[] {
  try {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    }
  } catch {
    // ignore
  }
  return [];
}

export function parseRawStatsToCountryStats(rawData: Record<string, unknown>): CountryVisitorStat[] {
  const stats: CountryVisitorStat[] = [];
  if (!rawData || typeof rawData !== 'object') return stats;

  for (const [key, value] of Object.entries(rawData)) {
    const code = key.toUpperCase().trim();
    const count = typeof value === 'number' ? value : Number(value);
    if (/^[A-Z]{2}$/.test(code) && !Number.isNaN(count) && count > 0) {
      stats.push({
        code,
        name: getCountryName(code),
        flag: getFlagEmoji(code),
        visitors: count,
      });
    }
  }

  stats.sort((a, b) => b.visitors - a.visitors);
  return stats;
}

export async function fetchLiveVisitorStats(): Promise<CountryVisitorStat[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(API_URL, { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      const stats = parseRawStatsToCountryStats(data);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
      }
      return stats;
    }
  } catch (err) {
    console.debug('Failed to fetch live visitor stats', err);
  }
  return getStoredVisitorStats();
}

async function detectVisitorCountry(): Promise<string> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      if (data.country_code && typeof data.country_code === 'string') {
        const code = data.country_code.toUpperCase().trim();
        if (/^[A-Z]{2}$/.test(code)) return code;
      }
    }
  } catch {
    // fallback
  }

  try {
    const lang = (navigator.language || '').toUpperCase();
    const parts = lang.split('-');
    if (parts.length > 1 && /^[A-Z]{2}$/.test(parts[1])) {
      return parts[1];
    }
  } catch {
    // ignore
  }

  return 'AR';
}

export async function recordVisitAndGetStats(): Promise<CountryVisitorStat[]> {
  const isAlreadyCounted =
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === 'true';

  if (!isAlreadyCounted) {
    try {
      const countryCode = await detectVisitorCountry();

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);
      const incRes = await fetch(INCREMENT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: countryCode, by: 1 }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      // If namespace entry didn't exist, initialize it
      if (!incRes.ok) {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ [countryCode]: 1 }),
        });
      }

      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(SESSION_KEY, 'true');
      }
    } catch (err) {
      console.debug('Could not increment visitor count', err);
    }
  }

  return await fetchLiveVisitorStats();
}
