import { describe, it, expect } from 'vitest';
import {
  INITIAL_VISITOR_STATS,
  getFlagEmoji,
  getCountryName,
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

  it('should provide default initial visitor stats with Argentina as leader', () => {
    const stats = getStoredVisitorStats();
    expect(stats.length).toBeGreaterThan(0);
    expect(stats[0].code).toBe('AR');
    expect(stats[0].flag).toBe('🇦🇷');
    expect(stats[0].visitors).toBeGreaterThan(1000);
  });

  it('should verify all default countries have a flag and valid visitor count', () => {
    INITIAL_VISITOR_STATS.forEach((country) => {
      expect(country.code).toMatch(/^[A-Z]{2}$/);
      expect(country.name).toBeTruthy();
      expect(country.flag).toBeTruthy();
      expect(country.visitors).toBeGreaterThan(0);
    });
  });
});
