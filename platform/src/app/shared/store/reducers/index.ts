import * as fromLines from './line.reducer';
import * as fromOperators from './operators.reducer';
import * as fromTurns from './turn.reducer';
import * as fromStoppages from './stoppage.reducer';
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
    lines: fromLines.LineState,
    operators: fromOperators.OperatorState,
    turns: fromTurns.TurnState,
    stoppages: fromStoppages.StoppageState
}


export const appReducers: ActionReducerMap<AppState> = {
    lines: fromLines.LineReducer,
    operators: fromOperators.OperatorReducer,
    turns: fromTurns.TurnReducer,
    stoppages: fromStoppages.StoppageReducer
}
