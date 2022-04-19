import { createSelector } from '@ngrx/store';
import { Task } from 'src/app/shared/models';
import { AppState } from '../../store';

//Dashboard
export const lists$ = (state: AppState) => state.dashboard.lists;
export const tasks$ = (state: AppState) => state.dashboard.tasks;

export const taksForList$ = (listName: string) =>
  createSelector(tasks$, (tasks) =>
    tasks.filter((task) => task.category === listName)
  );
