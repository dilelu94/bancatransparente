import { Landmark, Users, CalendarX } from 'lucide-react';
import { Session } from '../types';

interface HeaderProps {
  session: Session;
  onSelectSession: (sessionId: string) => void;
  availableSessions: Session[];
}

export const Header: React.FC<HeaderProps> = ({ session, onSelectSession, availableSessions }) => {
  const missingQuorum = Math.max(0, session.quorumRequired - session.quorumPresent);

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-sky-600 rounded-lg text-white shadow">
              <Landmark className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Banca Transparente
                </h1>
                <span className="text-xs font-semibold uppercase px-2 py-0.5 bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
                  Cívico & Abierto
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-0.5">
                Rendición de cuentas legislativa: la voz de los trabajadores y el pueblo en el Congreso
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <label htmlFor="session-select" className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Fecha de sesión:
            </label>
            <select
              id="session-select"
              value={session.id}
              onChange={(e) => onSelectSession(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {availableSessions.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.displayDate}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-lg flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 text-amber-400 rounded-md">
              <CalendarX className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Estado del Recinto</span>
              <span className="font-semibold text-rose-400">{session.outcome}</span>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-lg flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 text-sky-400 rounded-md">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Quórum Requerido</span>
              <span className="font-semibold text-slate-100">{session.quorumRequired} bancas</span>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-lg flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-md">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Presentes en el Recinto</span>
              <span className="font-semibold text-slate-100">{session.quorumPresent} diputados</span>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-lg flex items-center gap-3">
            <div className="p-2 bg-rose-500/10 text-rose-400 rounded-md">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Faltantes para Sesionar</span>
              <span className="font-semibold text-rose-400">{missingQuorum} bancas</span>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-slate-800/40 border border-slate-800 rounded-lg text-xs text-slate-300">
          <strong className="text-white">{session.title}:</strong> {session.description}
        </div>
      </div>
    </header>
  );
};
