import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '../reducers/index';
import { LineState } from '../reducers/line.reducer';

const getLinesState = createFeatureSelector<LineState>('lines');

// Selecciona todas las lineas almacenadas en el store
export const getLines = createSelector(getLinesState, (state: LineState) => state.lines);

export const getLoading = createSelector(getLinesState, (state:LineState) => state.isLoading);
export const getIdLine = createSelector(getLinesState, (state:LineState) => state.id);
