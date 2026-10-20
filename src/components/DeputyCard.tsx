import React from 'react';
import { Deputy } from '../types';
import { MapPin, UserX } from 'lucide-react';

interface DeputyCardProps {
  deputy: Deputy;
  onClick: (deputy: Deputy) => void;
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const getPartyColor = (party: string): { bg: string; text: string; border: string } => {
  const p = party.toLowerCase();
  if (p.includes('unión por la patria')) {
    return { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200' };
  }
  if (p.includes('pro')) {
    return { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' };
  }
  if (p.includes('ucr') || p.includes('adelante')) {
    return { bg: 'bg-red-50', text: 'text-red-800', border: 'border-red-200' };
  }
  if (p.includes('mid')) {
    return { bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' };
  }
  if (p.includes('provincias unidas')) {
    return { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200' };
  }
  if (p.includes('innovación federal')) {
    return { bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-200' };
  }
  if (p.includes('independencia')) {
    return { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' };
  }
  if (p.includes('producción y trabajo') || p.includes('neuquinidad') || p.includes('santa cruz')) {
    return { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200' };
  }
  if (p.includes('argentina federal') || p.includes('acuerdo san luis')) {
    return { bg: 'bg-cyan-50', text: 'text-cyan-800', border: 'border-cyan-200' };
  }
  return { bg: 'bg-slate-50', text: 'text-slate-800', border: 'border-slate-200' };
};

export const DeputyCard: React.FC<DeputyCardProps> = ({ deputy, onClick }) => {
  const partyColor = getPartyColor(deputy.party);
  const initials = getInitials(deputy.name);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(deputy)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(deputy);
        }
      }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-200 p-5 flex flex-col justify-between cursor-pointer group text-left focus:outline-none focus:ring-2 focus:ring-sky-500"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          {/* Avatar representation */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 text-slate-700 flex items-center justify-center font-bold text-lg shadow-inner group-hover:scale-105 transition-transform duration-200">
            {deputy.imageUrl ? (
              <img
                src={deputy.imageUrl}
                alt={deputy.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
            <UserX className="w-3 h-3" />
            Sin Quórum
          </span>
        </div>

        <div className="mt-4">
          <h3 className="font-bold text-base text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
            {deputy.name}
          </h3>
          
          <div className="mt-2">
            <span
              className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md border ${partyColor.bg} ${partyColor.text} ${partyColor.border}`}
            >
              {deputy.party}
            </span>
          </div>

          {deputy.socialMedia && Object.keys(deputy.socialMedia).length > 0 && (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
              {deputy.socialMedia.x && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-slate-900 text-white font-bold text-[10px]" title={`X: ${deputy.socialMedia.x.handle}`}>
                  𝕏
                </span>
              )}
              {deputy.socialMedia.instagram && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white font-bold text-[10px]" title={`Instagram: ${deputy.socialMedia.instagram.handle}`}>
                  📷
                </span>
              )}
              {deputy.socialMedia.facebook && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-blue-600 text-white font-bold text-[10px]" title={`Facebook: ${deputy.socialMedia.facebook.handle}`}>
                  f
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5 truncate font-medium" title={deputy.address || deputy.locationName || deputy.province}>
          <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${deputy.address ? 'text-sky-600' : 'text-slate-400'}`} />
          <span className="truncate">
            {deputy.address ? deputy.address : deputy.province}
          </span>
        </span>
        <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform flex-shrink-0 ml-2">
          Ver ficha &rarr;
        </span>
      </div>
    </div>
  );
};
