import { useState, useMemo } from 'react';
import { SESSIONS_DATA } from './data/sessions';
import { Deputy } from './types';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { DeputyCard } from './components/DeputyCard';
import { DeputyModal } from './components/DeputyModal';
import { Footer } from './components/Footer';
import { Users, Info } from 'lucide-react';

export function App() {
  const [selectedSessionId, setSelectedSessionId] = useState<string>(SESSIONS_DATA[0].id);
  const [selectedDeputy, setSelectedDeputy] = useState<Deputy | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedParty, setSelectedParty] = useState<string>('');
  const [selectedProvince, setSelectedProvince] = useState<string>('');

  const currentSession = useMemo(() => {
    return SESSIONS_DATA.find((s) => s.id === selectedSessionId) || SESSIONS_DATA[0];
  }, [selectedSessionId]);

  const uniqueParties = useMemo(() => {
    const set = new Set(currentSession.deputies.map((d) => d.party));
    return Array.from(set).sort();
  }, [currentSession]);

  const uniqueProvinces = useMemo(() => {
    const set = new Set(currentSession.deputies.map((d) => d.province));
    return Array.from(set).sort();
  }, [currentSession]);

  const filteredDeputies = useMemo(() => {
    return currentSession.deputies.filter((d) => {
      const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
      const matchesParty = selectedParty ? d.party === selectedParty : true;
      const matchesProvince = selectedProvince ? d.province === selectedProvince : true;
      return matchesSearch && matchesParty && matchesProvince;
    });
  }, [currentSession, searchQuery, selectedParty, selectedProvince]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedParty('');
    setSelectedProvince('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header
        session={currentSession}
        onSelectSession={setSelectedSessionId}
        availableSessions={SESSIONS_DATA}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Context Banner */}
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 mb-6 flex items-start gap-3 text-sky-900 text-sm">
          <Info className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Registro de Ausencias y Bloqueo de Quórum:</strong> A continuación se detallan los diputados que no bajaron al recinto a dar quórum en la sesión del {currentSession.displayDate}. Haz clic sobre cualquier legislador para ver su distrito institucional o buscar información pública.
          </div>
        </div>

        {/* Filters */}
        <Filters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedParty={selectedParty}
          onPartyChange={setSelectedParty}
          selectedProvince={selectedProvince}
          onProvinceChange={setSelectedProvince}
          parties={uniqueParties}
          provinces={uniqueProvinces}
          totalResults={filteredDeputies.length}
          onReset={handleResetFilters}
        />

        {/* Deputies Grid */}
        {filteredDeputies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDeputies.map((deputy) => (
              <DeputyCard
                key={deputy.id}
                deputy={deputy}
                onClick={setSelectedDeputy}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-base font-semibold text-slate-700">No se encontraron diputados</p>
            <p className="text-sm text-slate-400 mt-1">Prueba cambiando los filtros de búsqueda.</p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </main>

      <Footer />

      {/* Modal */}
      <DeputyModal
        deputy={selectedDeputy}
        onClose={() => setSelectedDeputy(null)}
      />
    </div>
  );
}

export default App;
