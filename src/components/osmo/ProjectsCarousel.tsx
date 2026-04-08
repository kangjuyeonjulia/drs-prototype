import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "[Let's Get Rich] RO x LGR",
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    category: 'Game Design',
  },
  {
    id: 2,
    title: 'FC Credit Card Campaign',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
    category: 'Marketing',
  },
  {
    id: 3,
    title: 'LINE Bubble 2 Banners',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    category: 'Game Design',
  },
  {
    id: 4,
    title: 'LCM - Wuukie & Soya',
    image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=600&fit=crop',
    category: 'Character Design',
  },
  {
    id: 5,
    title: 'LINE Friends Collection',
    image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop',
    category: 'Brand Design',
  },
  {
    id: 6,
    title: 'LYP Premium UI',
    image: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop',
    category: 'Product Design',
  },
];

export default function ProjectsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Double the projects array for seamless loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mb-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Latest Work</h2>
        <p className="text-xl text-gray-600">진행한 프로젝트들을 둘러보세요</p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="group flex-shrink-0 w-[480px] cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                {project.category}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
