import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from '../reducers/index';
import { OperatorState } from '../reducers/operators.reducer';

const getOperatorsState = createFeatureSelector<AppState, OperatorState>('operators');

export const getOperators = createSelector(getOperatorsState, (state: OperatorState) => state.operators);

export const getOperatorsById = createSelector(
    getOperatorsState,
    (state: OperatorState, props) =>
        state.operators.filter(operator => operator.idLine === props.id));