import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import WorkList from './components/WorkList';

function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'worklist'>('dashboard');
  const [heroStage, setHeroStage] = useState(0);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);

  // Show header only after intro animation (stage >= 4) or when not on dashboard
  const showHeader = activeView === 'worklist' || heroStage >= 4;

  return (
    <div className="h-screen flex flex-col">
      <div
        className={`transition-all duration-1000 ${
          showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
        style={{ position: showHeader ? 'relative' : 'absolute', width: '100%', zIndex: 50 }}
      >
        <Header activeView={activeView} onViewChange={setActiveView} />
      </div>
      <main className="flex-1 overflow-y-auto">
        {activeView === 'dashboard' ? (
          <Dashboard
            onNavigateToWorkList={() => setActiveView('worklist')}
            onHeroStageChange={(stage) => {
              setHeroStage(stage);
              if (stage >= 5 && !hasPlayedIntro) {
                setHasPlayedIntro(true);
              }
            }}
            skipIntro={hasPlayedIntro}
          />
        ) : (
          <WorkList />
        )}
      </main>
    </div>
  );
}

export default App;
