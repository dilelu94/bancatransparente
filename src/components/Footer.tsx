import React from 'react';
import { Github, Landmark, Heart, Globe } from 'lucide-react';

interface FooterProps {
  onOpenVisitorStats: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitorStats }) => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Landmark className="w-4 h-4 text-sky-400" />
            <span className="font-semibold text-white">Banca Transparente</span>
            <span>&bull;</span>
            <span>Observatorio Ciudadano y Popular</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dilelu94/bancatransparente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Código Fuente Abierto en GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800/80 text-center text-slate-500 space-y-1">
          <p>
            Plataforma cívica construida con datos de dominio público de la Honorable Cámara de Diputados de la Nación.
          </p>
          <p className="flex items-center justify-center gap-1 text-[11px]">
            <span>Defendiendo la transparencia y los derechos laborales</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>para todo el pueblo argentino</span>
          </p>
        </div>

        {/* Registros de visitantes al fondo abajo de todo */}
        <div className="mt-4 pt-3 border-t border-slate-800/50 flex justify-center">
          <button
            type="button"
            onClick={onOpenVisitorStats}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-xs transition-colors cursor-pointer py-1.5 px-3 rounded-md hover:bg-slate-800/60"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>Registros de visitantes</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

