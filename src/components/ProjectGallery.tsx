import { ArrowRight, Calendar, Tag } from 'lucide-react';
import type { Project } from '../types';

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-container mx-auto px-6">
        <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-2">
          ⚡ 최근 완료된 프로젝트
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-text-primary mb-2 line-clamp-2 min-h-[3rem]">
                  {project.title}
                </h4>
                <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
                  <Calendar size={14} />
                  <span>{project.completedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={14} className="text-primary" />
                  <span className="inline-block px-3 py-1 bg-green-50 text-primary text-xs font-medium rounded-full">
                    {project.team}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors">
            더 많은 프로젝트 보기
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
