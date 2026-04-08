import OsmoHero from './dashboard/OsmoHero';
import ProjectsCarousel from './dashboard/ProjectsCarousel';
import MetricsSection from './dashboard/MetricsSection';
import NotificationCards from './dashboard/NotificationCards';
import GlobalDistribution from './dashboard/GlobalDistribution';
import OngoingProjects from './dashboard/OngoingProjects';
import CharacterRankings from './dashboard/CharacterRankings';
import CharacterCarousel from './dashboard/CharacterCarousel';

interface DashboardProps {
  onNavigateToWorkList: () => void;
  onHeroStageChange: (stage: number) => void;
  skipIntro: boolean;
}

export default function Dashboard({ onNavigateToWorkList, onHeroStageChange, skipIntro }: DashboardProps) {
  return (
    <div className="relative bg-white min-h-full">
      {/* Hero Section - Osmo Style */}
      <OsmoHero
        onNavigateToWorkList={onNavigateToWorkList}
        onStageChange={onHeroStageChange}
        skipIntro={skipIntro}
      />

      {/* Latest Work - Projects Carousel */}
      <div className="py-24 bg-gray-50">
        <ProjectsCarousel />
      </div>

      {/* Notifications + Global Distribution */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <NotificationCards />
            <GlobalDistribution />
          </div>
        </div>
      </div>

      {/* Key Metrics - Apple Style Full Width */}
      <div className="py-24 bg-gray-50">
        <MetricsSection />
      </div>

      {/* Character Carousel */}
      <div className="py-24 bg-white">
        <CharacterCarousel />
      </div>

      {/* Character Rankings - Full Width */}
      <div className="py-24 bg-gray-50">
        <CharacterRankings />
      </div>

      {/* Ongoing Projects - WorkList Style */}
      <div className="py-24 bg-white">
        <OngoingProjects />
      </div>
    </div>
  );
}
