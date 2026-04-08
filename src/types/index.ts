export interface Metrics {
  inProgress: number;
  completed: number;
  averageDays: number;
}

export interface Team {
  name: string;
  count: number;
  maxCapacity: number;
}

export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  completedDate: string;
  team: string;
  status: 'completed' | 'inProgress' | 'pending';
}
