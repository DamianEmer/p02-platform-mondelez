import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../reducers/index';
import { StoppageState } from '../reducers/stoppage.reducer';

const getStoppagesState = createFeatureSelector<AppState, StoppageState>('stoppages');

export const getStoppages = createSelector(getStoppagesState, (state: StoppageState) => state.stoppages);
