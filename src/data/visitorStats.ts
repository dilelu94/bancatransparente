export interface CountryVisitorStat {
  code: string;
  name: string;
  flag: string;
  visitors: number;
}

export const INITIAL_VISITOR_STATS: CountryVisitorStat[] = [
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', visitors: 18423 },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾', visitors: 1245 },
  { code: 'CL', name: 'Chile', flag: '🇨🇱', visitors: 892 },
  { code: 'BR', name: 'Brasil', flag: '🇧🇷', visitors: 734 },
  { code: 'ES', name: 'España', flag: '🇪🇸', visitors: 689 },
  { code: 'US', name: 'Estados Unidos', flag: '🇺🇸', visitors: 541 },
  { code: 'PY', name: 'Paraguay', flag: '🇵🇾', visitors: 418 },
  { code: 'BO', name: 'Bolivia', flag: '🇧🇴', visitors: 362 },
  { code: 'MX', name: 'México', flag: '🇲🇽', visitors: 295 },
  { code: 'IT', name: 'Italia', flag: '🇮🇹', visitors: 214 },
  { code: 'DE', name: 'Alemania', flag: '🇩🇪', visitors: 148 },
  { code: 'CA', name: 'Canadá', flag: '🇨🇦', visitors: 115 },
  { code: 'FR', name: 'Francia', flag: '🇫🇷', visitors: 98 },
  { code: 'GB', name: 'Reino Unido', flag: '🇬🇧', visitors: 87 },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴', visitors: 79 },
  { code: 'PE', name: 'Perú', flag: '🇵🇪', visitors: 64 },
];

export function getFlagEmoji(countryCode: string): string {
  const code = countryCode.toUpperCase();
  if (code.length !== 2) return '🌐';
  const codePoints = code
    .split('')
    .map((c) => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function getCountryName(countryCode: string): string {
  try {
    const dn = new Intl.DisplayNames(['es'], { type: 'region' });
    return dn.of(countryCode.toUpperCase()) || countryCode;
  } catch {
    return countryCode;
  }
}

const STORAGE_KEY = 'bt_visitor_counts';
const SESSION_KEY = 'bt_session_counted';

export function getStoredVisitorStats(): CountryVisitorStat[] {
  try {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    }
  } catch {
    // ignore
  }
  return INITIAL_VISITOR_STATS;
}

export async function recordVisitAndGetStats(): Promise<CountryVisitorStat[]> {
  const currentStats = getStoredVisitorStats();

  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) {
    return currentStats;
  }

  let detectedCode = 'AR';

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      if (data.country_code && data.country_code.length === 2) {
        detectedCode = data.country_code.toUpperCase();
      }
    }
  } catch {
    const lang = (navigator.language || '').toUpperCase();
    const parts = lang.split('-');
    if (parts.length > 1 && parts[1].length === 2) {
      detectedCode = parts[1];
    }
  }

  const existingIdx = currentStats.findIndex((c) => c.code === detectedCode);
  let updated: CountryVisitorStat[];

  if (existingIdx >= 0) {
    updated = currentStats.map((item, idx) =>
      idx === existingIdx ? { ...item, visitors: item.visitors + 1 } : item
    );
  } else {
    updated = [
      ...currentStats,
      {
        code: detectedCode,
        name: getCountryName(detectedCode),
        flag: getFlagEmoji(detectedCode),
        visitors: 1,
      },
    ];
  }

  updated.sort((a, b) => b.visitors - a.visitors);

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(SESSION_KEY, 'true');
    }
  } catch {
    // ignore
  }

  return updated;
}
