import { createReducer, on } from '@ngrx/store';
import { DashboardState } from 'src/app/shared/models';
import {
  addList,
  addTask,
  changeTaskCategory,
  deleteList,
  deleteTask,
} from './dashboard.action';

const getRandomId = () => {
  return Math.random().toString() + Date.now().toString();
};
export const dashboardFeatureKey = 'dashboard-key';

export const initialDashboardState: DashboardState = {
  tasks: [
    {
      id: getRandomId(),
      title: 'Products',
      category: 'Teams',
      timestamp: new Date(),
      desc: '3 pending tasks to be fulfilled by Raj',
    },
    {
      id: getRandomId(),
      title: 'Sales',
      category: 'Teams',
      timestamp: new Date(),
      desc: 'Send Proposal to Puneet for sales prices',
    },
    {
      id: getRandomId(),
      title: 'UAT Testing',
      category: 'Products',
      timestamp: new Date(),
      desc: 'Ask Eng to setup testing',
    },
  ],
  lists: ['Teams', 'Products'],
};

export const dashboardReducer = createReducer(
  initialDashboardState,
  on(addTask, (state, action) => ({
    ...state,
    tasks: [...state.tasks, action.task],
  })),
  on(deleteTask, (state, action) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== action.taskId),
  })),
  on(changeTaskCategory, (state, action) => ({
    ...state,
    tasks: state.tasks.map((task) => {
      if (task.id === action.taskId) {
        return {
          ...task,
          category: action.currentCategory,
        };
      }
      return task;
    }),
  })),
  on(addList, (state, action) => ({
    ...state,
    lists: [...state.lists, action.listName],
  })),
  on(deleteList, (state, action) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.category !== action.listName),
    lists: state.lists.filter((list) => list !== action.listName),
  }))
);
