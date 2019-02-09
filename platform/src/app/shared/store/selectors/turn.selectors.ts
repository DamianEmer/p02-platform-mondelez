import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../reducers/index';
import { TurnState } from '../reducers/turn.reducer';

const getTurnState = createFeatureSelector<AppState, TurnState>('turns');

export const getTurns = createSelector(getTurnState, (state: TurnState) => state.turns);