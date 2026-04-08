import { Users } from 'lucide-react';
import type { Team } from '../types';

interface TeamStatusProps {
  teams: Team[];
}

export default function TeamStatus({ teams }: TeamStatusProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-6">
        <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-2">
          <Users size={28} />
          팀별 작업 현황
        </h3>
        <div className="space-y-6">
          {teams.map((team, index) => {
            const percentage = (team.count / team.maxCapacity) * 100;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-text-primary text-lg">
                    {team.name}
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {team.count}건
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="mt-2 text-sm text-text-secondary text-right">
                  용량: {team.count} / {team.maxCapacity}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
