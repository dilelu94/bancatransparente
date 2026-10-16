import React, { useEffect } from 'react';
import { Deputy } from '../types';
import { X, Search, MapPin, ShieldCheck, Building2 } from 'lucide-react';

interface DeputyModalProps {
  deputy: Deputy | null;
  onClose: () => void;
}

export const DeputyModal: React.FC<DeputyModalProps> = ({ deputy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (deputy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [deputy, onClose]);

  if (!deputy) return null;

  const searchQuery = encodeURIComponent(`${deputy.name} (${deputy.party})`);
  const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}&sourceid=chrome&ie=UTF-8&source=chrome.ctxt`;
  
  // Safe embedded Google Map focused on the deputy's constituency / province district seat
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(deputy.locationName || deputy.province + ', Argentina')}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between relative">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 text-slate-200 flex items-center justify-center font-bold text-xl shadow overflow-hidden">
              {deputy.imageUrl ? (
                <img
                  src={deputy.imageUrl}
                  alt={deputy.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                deputy.name.split(' ').slice(0, 2).map((n) => n[0]).join('')
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Sin Quórum
                </span>
                <span className="text-xs text-slate-400">H. Cámara de Diputados</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                {deputy.name}
              </h2>
              <p className="text-sm text-sky-400 font-medium">
                {deputy.party} &bull; {deputy.province}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Legislative Context */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Building2 className="w-4 h-4 text-sky-600" />
              <span>Representación Territorial e Institucional</span>
            </div>
            <p>
              <strong>Distrito Electoral:</strong> {deputy.province}
            </p>
            <p>
              <strong>Actividad en Recinto:</strong> Figura entre los legisladores ausentes que impidieron alcanzar el quórum de 129 diputados en la sesión especial convocada para rechazar el DNU 70/2023 y tratar el financiamiento universitario.
            </p>
          </div>

          {/* Privacy & Safety Note */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Aviso de Privacidad y Función Pública:</strong> En cumplimiento de normativas de protección de datos personales y seguridad preventiva (políticas anti-doxxing), este portal no divulga domicilios residenciales privados. El mapa refleja la cabecera distrital y sede de representación institucional ante el pueblo soberano.
            </p>
          </div>

          {/* Google Map of Electoral District / Province */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Jurisdicción y Distrito: {deputy.locationName}</span>
            </div>
            <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
              <iframe
                title={`Mapa del distrito de ${deputy.name}`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Información de acceso público parlamentario
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <Search className="w-4 h-4" />
              <span>Buscar esta persona en Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
