import { describe, it, expect } from 'vitest';
import {
  getFlagEmoji,
  getCountryName,
  parseRawStatsToCountryStats,
  getStoredVisitorStats,
} from './visitorStats';

describe('visitorStats', () => {
  it('should generate valid flag emojis for country codes', () => {
    expect(getFlagEmoji('AR')).toBe('🇦🇷');
    expect(getFlagEmoji('UY')).toBe('🇺🇾');
    expect(getFlagEmoji('ES')).toBe('🇪🇸');
    expect(getFlagEmoji('US')).toBe('🇺🇸');
  });

  it('should return valid country names in Spanish', () => {
    expect(getCountryName('AR')).toBe('Argentina');
    expect(getCountryName('ES')).toBe('España');
    expect(getCountryName('US')).toBe('Estados Unidos');
  });

  it('should parse raw cloud stats object into sorted CountryVisitorStat array', () => {
    const raw = {
      AR: 10,
      UY: 3,
      ES: 5,
      invalid: -1,
      xyz123: 'abc',
    };

    const stats = parseRawStatsToCountryStats(raw);
    expect(stats.length).toBe(3);
    expect(stats[0].code).toBe('AR');
    expect(stats[0].visitors).toBe(10);
    expect(stats[0].flag).toBe('🇦🇷');

    expect(stats[1].code).toBe('ES');
    expect(stats[1].visitors).toBe(5);

    expect(stats[2].code).toBe('UY');
    expect(stats[2].visitors).toBe(3);
  });

  it('should return empty array by default when no stats are stored yet', () => {
    const stats = getStoredVisitorStats();
    expect(Array.isArray(stats)).toBe(true);
  });
});
