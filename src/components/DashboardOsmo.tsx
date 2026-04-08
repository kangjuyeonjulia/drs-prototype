import OsmoHero from './osmo/OsmoHero';
import ProjectsCarousel from './osmo/ProjectsCarousel';
import OsmoContentSections from './osmo/OsmoContentSections';

export default function DashboardOsmo() {
  return (
    <div className="relative bg-white min-h-full">
      {/* Hero Section */}
      <OsmoHero />

      {/* Rotating Projects Carousel */}
      <ProjectsCarousel />

      {/* Content Sections */}
      <OsmoContentSections />
    </div>
  );
}
