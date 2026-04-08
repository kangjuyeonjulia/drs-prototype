import type { Metrics, Team, Project } from '../types';

export const metrics: Metrics = {
  inProgress: 877,
  completed: 245,
  averageDays: 10,
};

export const teams: Team[] = [
  { name: 'VX Design', count: 8, maxCapacity: 20 },
  { name: 'UI Design', count: 5, maxCapacity: 15 },
  { name: 'Multimedia', count: 3, maxCapacity: 10 },
];

export const recentProjects: Project[] = [
  {
    id: 1,
    title: "[Let's Get Rich] 260407 RO x LGR",
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    completedDate: '2026.04.07',
    team: 'VX',
    status: 'completed',
  },
  {
    id: 2,
    title: '[BE] FC_5/6月信用卡平台活動',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    completedDate: '2026.04.07',
    team: 'VX',
    status: 'completed',
  },
  {
    id: 3,
    title: 'LINE Bubble 2 External banners_May-July 2026',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    completedDate: '2026.04.07',
    team: 'VX',
    status: 'completed',
  },
  {
    id: 4,
    title: 'LCM - Wuukie & Soya',
    thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&h=300&fit=crop',
    completedDate: '2026.04.07',
    team: 'VX',
    status: 'completed',
  },
];
