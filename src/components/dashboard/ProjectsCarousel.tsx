import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Hello Friends Booth',
    image: '/images/hellofriendsbooth.png',
    category: 'Brand Experience',
  },
  {
    id: 2,
    title: 'LYP Premium',
    image: '/images/lyppremium.png',
    category: 'Product Design',
  },
  {
    id: 3,
    title: 'LINE × Netflix',
    image: '/images/line-netflix.png',
    category: 'Partnership',
  },
  {
    id: 4,
    title: 'Tech Week',
    image: '/images/techweek.png',
    category: 'Event Design',
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
    <section className="overflow-hidden">
      <div className="mb-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">From Request to Result</h2>
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
