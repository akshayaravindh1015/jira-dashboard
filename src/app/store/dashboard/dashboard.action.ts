import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/shared/models';

export const addTask = createAction(
  '[Dashboard] Add Task',
  props<{ task: Task }>()
);
export const deleteTask = createAction(
  '[Dashboard] Delete Task',
  props<{ taskId: string }>()
);
export const changeTaskCategory = createAction(
  '[Dashboard] Change Task Category',
  props<{ taskId: string; prevCategory: string; currentCategory: string }>()
);

export const addList = createAction(
  '[Dashboard] Add List',
  props<{ listName: string }>()
);
export const deleteList = createAction(
  '[Dashboard] Delete List',
  props<{ listName: string }>()
);
