import React, { useEffect, useMemo } from 'react';
import { X, Globe, Users } from 'lucide-react';
import { CountryVisitorStat } from '../data/visitorStats';

interface VisitorModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: CountryVisitorStat[];
}

export const VisitorModal: React.FC<VisitorModalProps> = ({ isOpen, onClose, stats }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const totalVisitors = useMemo(() => {
    return stats.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [stats]);

  const maxVisitors = useMemo(() => {
    return Math.max(...stats.map((s) => s.visitors), 1);
  }, [stats]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg leading-tight">
                Registros de visitantes
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  Total:{' '}
                  <strong className="text-slate-700 font-semibold">
                    {totalVisitors.toLocaleString('es-AR')}
                  </strong>{' '}
                  visitas registradas
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Countries List */}
        <div className="p-4 overflow-y-auto flex-1 divide-y divide-slate-100">
          {stats.map((country, index) => {
            const percentage = ((country.visitors / maxVisitors) * 100).toFixed(0);
            return (
              <div
                key={country.code}
                className="py-3 px-2 flex items-center justify-between gap-3 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs font-semibold text-slate-400 w-5 text-right flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-2xl flex-shrink-0 select-none leading-none" role="img" aria-label={country.name}>
                    {country.flag}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-800 text-sm truncate">
                      {country.name}
                    </p>
                    {/* Visual bar */}
                    <div className="w-24 sm:w-36 bg-slate-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div
                        className="bg-sky-500 h-full rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-right flex-shrink-0 pl-2">
                  <span className="text-sm font-bold text-slate-800">
                    {country.visitors.toLocaleString('es-AR')}
                  </span>
                  <p className="text-[11px] text-slate-400">visitantes</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Actualización por geolocalización
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
