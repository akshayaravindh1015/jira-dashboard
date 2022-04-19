import { Task } from './task.model';

export type DashboardState = {
  tasks: Task[];
  lists: string[];
};
