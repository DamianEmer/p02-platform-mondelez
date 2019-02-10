import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from '../reducers/index';
import { UnplannedStoppageState } from '../reducers/unplannedstoppages.reducer';

const getUnplannedStoppageState = 
    createFeatureSelector<AppState, UnplannedStoppageState>('unplannedStoppages');

export const getUnplannedStoppage = createSelector(
    getUnplannedStoppageState, 
    (state: UnplannedStoppageState) => state.unplannedStoppages);