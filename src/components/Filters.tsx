import React from 'react';
import { Search, Filter, RotateCcw } from 'lucide-react';

interface FiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedParty: string;
  onPartyChange: (value: string) => void;
  selectedProvince: string;
  onProvinceChange: (value: string) => void;
  parties: string[];
  provinces: string[];
  totalResults: number;
  onReset: () => void;
}

export const Filters: React.FC<FiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedParty,
  onPartyChange,
  selectedProvince,
  onProvinceChange,
  parties,
  provinces,
  totalResults,
  onReset,
}) => {
  const hasActiveFilters = searchQuery !== '' || selectedParty !== '' || selectedProvince !== '';

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por nombre de diputado..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Party Filter */}
        <div className="relative">
          <select
            value={selectedParty}
            onChange={(e) => onPartyChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="">Todos los bloques ({parties.length})</option>
            {parties.map((party) => (
              <option key={party} value={party}>
                {party}
              </option>
            ))}
          </select>
          <Filter className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Province Filter */}
        <div className="relative">
          <select
            value={selectedProvince}
            onChange={(e) => onProvinceChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="">Todas las provincias ({provinces.length})</option>
            {provinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
          <Filter className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>
          Mostrando <strong className="text-slate-800">{totalResults}</strong> legisladores
        </span>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Limpiar filtros
          </button>
        )}
      </div>
    </div>
  );
};
