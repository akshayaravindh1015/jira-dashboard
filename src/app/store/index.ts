import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { DashboardState } from 'src/app/shared/models';
import { environment } from '../../environments/environment';

import { dashboardReducer } from './dashboard/dashboard.reducer';

export interface AppState {
  dashboard: DashboardState;
}

export const reducers: ActionReducerMap<AppState> = {
  dashboard: dashboardReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
