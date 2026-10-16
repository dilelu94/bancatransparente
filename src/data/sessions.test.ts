import { describe, it, expect } from 'vitest';
import { SESSIONS_DATA } from './sessions';

describe('SESSIONS_DATA', () => {
  it('should have at least one session registered', () => {
    expect(SESSIONS_DATA.length).toBeGreaterThan(0);
  });

  it('should have the October 15, 2026 session with 43 deputies', () => {
    const session2026 = SESSIONS_DATA.find((s) => s.id === '2026-10-15');
    expect(session2026).toBeDefined();
    expect(session2026?.deputies.length).toBe(43);
  });

  it('should have correct quorum numbers for October 15, 2026 session', () => {
    const session = SESSIONS_DATA.find((s) => s.id === '2026-10-15')!;
    expect(session.quorumRequired).toBe(129);
    expect(session.quorumPresent).toBe(121);
    expect(session.quorumRequired - session.quorumPresent).toBe(8);
  });

  it('should ensure each deputy has non-empty required properties', () => {
    const session = SESSIONS_DATA.find((s) => s.id === '2026-10-15')!;
    session.deputies.forEach((deputy) => {
      expect(deputy.id).toBeTruthy();
      expect(deputy.name).toBeTruthy();
      expect(deputy.party).toBeTruthy();
      expect(deputy.province).toBeTruthy();
      expect(deputy.locationName).toBeTruthy();
      expect(deputy.status).toBe('ausente');
    });
  });

  it('should contain expected deputies from prompt list', () => {
    const session = SESSIONS_DATA.find((s) => s.id === '2026-10-15')!;
    const names = session.deputies.map((d) => d.name);
    expect(names).toContain('Estela Mary Neder');
    expect(names).toContain('Paulo Agustín Tita');
    expect(names).toContain('Cristian A. Ritondo');
    expect(names).toContain('Martín Yeza');
    expect(names).toContain('Karina Maureira');
    expect(names).toContain('Oscar Zago');
  });
});
