import React, { useEffect, useState } from 'react';
import { Deputy } from '../types';
import { X, Search, MapPin, Building2, ExternalLink, Home, MessageSquarePlus, Github, Banknote, Info, Car, ChevronDown, ChevronUp } from 'lucide-react';
import { getDeputySalary, formatCurrencyARS, SALARY_CONFIG } from '../data/sessions';

function formatVehicleName(desc: string): string {
  let cleaned = desc.replace(/^Modelo:\s*/i, '').trim();
  cleaned = cleaned.replace(/\|/g, ' ');
  cleaned = cleaned.replace(/CHEVROLETCHEVROLET/gi, 'Chevrolet ');
  cleaned = cleaned.replace(/FORD(?=[A-Z])/g, 'Ford ');
  cleaned = cleaned.replace(/MERCEDES BENZ(?=[A-Z])/g, 'Mercedes Benz ');
  cleaned = cleaned.replace(/YAMAHA(?=[A-Z])/g, 'Yamaha ');
  cleaned = cleaned.replace(/HONDA(?=[A-Z])/g, 'Honda ');
  cleaned = cleaned.replace(/TOYOTA(?=[A-Z])/g, 'Toyota ');
  cleaned = cleaned.replace(/VOLKSWAGEN(?=[A-Z])/g, 'Volkswagen ');
  cleaned = cleaned.replace(/JEEP(?=[A-Z])/g, 'Jeep ');
  cleaned = cleaned.replace(/CITROEN(?=[A-Z])/g, 'Citroën ');
  cleaned = cleaned.replace(/SUZUKI(?=[A-Z])/g, 'Suzuki ');
  cleaned = cleaned.replace(/KTM(?=[A-Z])/g, 'KTM ');
  cleaned = cleaned.replace(/HUSQVARNA(?=[A-Z])/g, 'Husqvarna ');
  if (cleaned.toLowerCase() === 'mg b') return 'MG B Roadster Clásico Inglés';
  return cleaned;
}

const getDeclarationBadge = (anio?: number): { label: string; className: string } | null => {
  if (!anio) return null;
  // Año actual de la sesión / calendario: 2026
  const currentYear = 2026;
  const diff = currentYear - anio;
  if (diff <= 0) {
    // De este año (2026): blanco
    return {
      label: `última declaración jurada (${anio})`,
      className: 'bg-white/10 text-white border-white/20'
    };
  } else if (diff === 1) {
    // Hace 1 año (2025): amarillo
    return {
      label: `última declaración jurada (${anio})`,
      className: 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-medium'
    };
  } else {
    // 2 años o más (2024 o anteriores): rojo
    return {
      label: `última declaración jurada (${anio})`,
      className: 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-medium'
    };
  }
};

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

  const [showVehicles, setShowVehicles] = useState<boolean>(false);

  if (!deputy) return null;

  const declBadge = getDeclarationBadge(deputy.declaration?.anio);
  const vehicles = deputy.declaration?.vehiculos || [];
  const searchQuery = encodeURIComponent(`${deputy.name} (${deputy.party})`);
  const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}&sourceid=chrome&ie=UTF-8&source=chrome.ctxt`;
  
  // Pre-filled GitHub issue URL to make contributing address and sources effortless
  const issueTitle = encodeURIComponent(`Aporte de domicilio / CUIT: ${deputy.name}`);
  const issueBody = encodeURIComponent(
    `### Legislador: ${deputy.name}\n` +
    `**Bloque:** ${deputy.party}\n` +
    `**Provincia:** ${deputy.province}\n\n` +
    `---\n\n` +
    `### CUIT / DNI:\n` +
    `<!-- CUIT y/o DNI verificado en registros públicos -->\n\n\n` +
    `### Domicilio propuesto:\n` +
    `<!-- Calle, número, localidad, provincia, código postal -->\n\n\n` +
    `### Fuentes y enlaces de verificación pública:\n` +
    `<!-- Enlaces a AFIP, Boletín Oficial, directorio mercantil o fuentes oficiales -->\n`
  );
  const githubIssueUrl = `https://github.com/dilelu94/bancatransparente/issues/new?title=${issueTitle}&body=${issueBody}`;

  // Embedded Google Map only when address is available
  const mapEmbedUrl = deputy.address
    ? `https://maps.google.com/maps?q=${encodeURIComponent(deputy.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    : null;

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
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between relative gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 text-slate-200 flex items-center justify-center font-bold text-xl shadow overflow-hidden flex-shrink-0">
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
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Sin Quórum
                </span>
                <span className="text-xs text-slate-400">H. Cámara de Diputados</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white truncate">
                {deputy.name}
              </h2>
              <p className="text-sm text-sky-400 font-medium truncate">
                {deputy.party} &bull; {deputy.province}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {declBadge && (
              <span
                className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${declBadge.className}`}
                title={`Declaración Jurada Patrimonial Integral presentada ante la Oficina Anticorrupción (${deputy.declaration?.anio})`}
              >
                {declBadge.label}
              </span>
            )}
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
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
              <strong>CUIT / DNI:</strong>{' '}
              {deputy.cuit ? (
                <span className="font-mono font-medium text-slate-900 bg-slate-200/80 px-2 py-0.5 rounded border border-slate-300">
                  {deputy.cuit} {deputy.dni ? `(DNI: ${deputy.dni})` : ''}
                </span>
              ) : (
                <span className="text-slate-400 italic">No registrado aún</span>
              )}
            </p>
            <p>
              <strong>Actividad en Recinto:</strong> Figura entre los legisladores ausentes que impidieron alcanzar el quórum de 129 diputados en la sesión especial convocada para rechazar el DNU 70/2023 y tratar el financiamiento universitario.
            </p>

            {deputy.socialMedia && Object.keys(deputy.socialMedia).length > 0 && (
              <div className="pt-2 border-t border-slate-200/80 mt-2">
                <span className="font-semibold text-slate-800 block mb-1.5">Redes Sociales Oficiales:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {deputy.socialMedia.x && (
                    <a
                      href={deputy.socialMedia.x.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black hover:bg-slate-800 text-white text-[11px] font-medium transition-colors shadow-xs"
                      title={`X (Twitter): ${deputy.socialMedia.x.handle}`}
                    >
                      <span className="font-bold text-xs">𝕏</span>
                      <span>{deputy.socialMedia.x.handle}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  )}
                  {deputy.socialMedia.instagram && (
                    <a
                      href={deputy.socialMedia.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-[11px] font-medium transition-opacity shadow-xs"
                      title={`Instagram: ${deputy.socialMedia.instagram.handle}`}
                    >
                      <span className="font-bold text-xs">📷</span>
                      <span>{deputy.socialMedia.instagram.handle}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  )}
                  {deputy.socialMedia.facebook && (
                    <a
                      href={deputy.socialMedia.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium transition-colors shadow-xs"
                      title={`Facebook: ${deputy.socialMedia.facebook.handle}`}
                    >
                      <span className="font-bold text-xs">f</span>
                      <span>{deputy.socialMedia.facebook.handle}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Vehículos Declarados (DDJJ Oficial) */}
          {vehicles.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden text-xs">
              <button
                type="button"
                onClick={() => setShowVehicles(!showVehicles)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors font-medium text-slate-900"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block text-sm">
                      Vehículos ({vehicles.length} declarados)
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      Flota automotor declarada ante la Oficina Anticorrupción
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                    {showVehicles ? 'Ocultar lista' : 'Ver vehículos'}
                  </span>
                  {showVehicles ? (
                    <ChevronUp className="w-4 h-4 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  )}
                </div>
              </button>

              {showVehicles && (
                <div className="p-4 pt-1 border-t border-slate-200 space-y-2.5 bg-white">
                  <div className="text-[11px] text-slate-500 pb-1 italic border-b border-slate-100 flex items-center justify-between">
                    <span>Valuación fiscal oficial (DDJJ {deputy.declaration?.anio || 2024})</span>
                    <span>Dominio reservado por Ley 25.326</span>
                  </div>
                  <div className="space-y-2">
                    {vehicles.map((v, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <strong className="text-slate-900 font-semibold text-xs leading-snug">
                            {formatVehicleName(v.descripcion)}
                          </strong>
                          <span className="font-mono text-emerald-700 font-bold text-xs whitespace-nowrap bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {formatCurrencyARS(v.importe)}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-600">
                          {v.anioFabricacion && (
                            <span>
                              <strong>Año:</strong> {v.anioFabricacion}
                            </span>
                          )}
                          {v.porcentaje && (
                            <span>
                              <strong>Titularidad:</strong> {v.porcentaje}%
                            </span>
                          )}
                          {v.fechaIngreso && (
                            <span>
                              <strong>Adquisición:</strong> {v.fechaIngreso}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Address and Map or PR Callout */}
          {deputy.address && mapEmbedUrl ? (
            <div className="space-y-4">
              <div className="bg-sky-50/80 border border-sky-200 rounded-xl p-4 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-sky-950">
                  <Home className="w-4 h-4 text-sky-700" />
                  <span>Domicilio Registrado</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {deputy.address}
                </p>
                {deputy.cuit && (
                  <p className="text-slate-600">
                    <strong>Identificación fiscal:</strong>{' '}
                    <span className="font-mono font-medium text-slate-900 bg-white px-1.5 py-0.5 rounded border border-sky-200">
                      CUIT {deputy.cuit}
                    </span>
                  </p>
                )}
                {deputy.addressNotes && (
                  <p className="text-slate-700 bg-white/90 p-2.5 rounded-lg border border-sky-200 text-xs leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Nota:</strong> {deputy.addressNotes}
                  </p>
                )}

                {deputy.addressSources && deputy.addressSources.length > 0 ? (
                  <div className="text-slate-600 pt-1 space-y-1.5">
                    <span className="font-semibold text-slate-800 block text-xs">
                      {deputy.addressSources.length > 1 ? 'Fuentes públicas verificadas:' : 'Fuente pública verificada:'}
                    </span>
                    <ul className="space-y-1">
                      {deputy.addressSources.map((source, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-sky-600 font-bold select-none">•</span>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 hover:text-sky-800 underline inline-flex items-center gap-1 font-medium text-xs break-all"
                          >
                            <span>{source.label}</span>
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : deputy.addressSource ? (
                  <p className="text-slate-500 pt-0.5">
                    Fuente pública:{' '}
                    <a
                      href={deputy.addressSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:text-sky-800 underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>Registro comercial / fiscal AFIP</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                ) : null}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>Ubicación: {deputy.address}</span>
                </div>
                <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                  <iframe
                    title={`Mapa de ubicación de ${deputy.name}`}
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
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center text-amber-900 space-y-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-amber-700 shadow-inner">
                <Home className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base text-amber-950">
                  Domicilio aún no registrado
                </h4>
                <p className="text-xs text-amber-800 max-w-md mx-auto leading-relaxed">
                  Actualmente no disponemos del domicilio fiscal o verificado de este legislador en la base de datos comunitaria.
                </p>
                <p className="text-xs text-amber-700 max-w-md mx-auto">
                  Si cuentas con enlaces o fuentes públicas verificables (AFIP, Boletín Oficial, registros comerciales), puedes aportarlo en el{' '}
                  <a
                    href="https://github.com/dilelu94/bancatransparente"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:text-sky-900 font-semibold underline"
                  >
                    repositorio de GitHub
                  </a>{' '}
                  abriendo un Issue.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <a
                  href={githubIssueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-all"
                >
                  <MessageSquarePlus className="w-4 h-4 text-sky-400" />
                  <span>Aportar domicilio (Crear Issue)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://github.com/dilelu94/bancatransparente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-all"
                >
                  <Github className="w-4 h-4 text-slate-700" />
                  <span>Ver Repositorio</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          )}

          {/* Estimated Salary / Dieta Legislativa (ubicado por debajo del mapa y domicilio) */}
          {(() => {
            const salary = getDeputySalary(deputy);
            return (
              <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-xl p-4 text-xs text-slate-700 space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-emerald-200/60 pb-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-950">
                    <Banknote className="w-4 h-4 text-emerald-700" />
                    <span>Ingresos Públicos Estimados (Dieta HCDN 2026)</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300">
                    Bolsillo: ~{formatCurrencyARS(salary.net)}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800">
                  <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-200/50">
                    <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-medium">Dieta Bruta Total</span>
                    <strong className="text-sm font-bold text-slate-900 font-mono">
                      ~{formatCurrencyARS(salary.gross)}
                    </strong>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      Sujeto a aportes de ley y Ganancias
                    </span>
                  </div>

                  <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-200/50">
                    <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-medium">Neto Estimado de Bolsillo</span>
                    <strong className="text-sm font-bold text-emerald-700 font-mono">
                      ~{formatCurrencyARS(salary.net)}
                    </strong>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      Acreditación mensual promedio
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 bg-white/60 p-2.5 rounded-lg border border-emerald-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Adicional por Desarraigo (&gt;100 km de CABA):</span>
                    <strong className={salary.hasDesarraigo ? "text-emerald-700 font-semibold" : "text-slate-500 font-medium"}>
                      {salary.hasDesarraigo ? `Aplica (+${formatCurrencyARS(SALARY_CONFIG.desarraigoNet)} neto est.)` : 'No aplica (CABA)'}
                    </strong>
                  </div>
                  <p className="text-[10px] text-slate-500 italic pt-1 border-t border-slate-100 flex items-start gap-1">
                    <Info className="w-3 h-3 flex-shrink-0 mt-0.5 text-slate-400" />
                    <span>
                      Estimación basada en la última pauta salarial y módulos de la Honorable Cámara de Diputados de la Nación (APL / Resoluciones de Presidencia HCDN). Varía según descuentos impositivos personales y antigüedad.
                    </span>
                  </p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Información de acceso público parlamentario
          </span>

          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
            {deputy.profileUrl && (
              <a
                href={deputy.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                <ExternalLink className="w-4 h-4 text-sky-400" />
                <span>Perfil Oficial HCDN</span>
              </a>
            )}
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
