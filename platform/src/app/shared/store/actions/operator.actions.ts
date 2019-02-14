import { Action } from "@ngrx/store";
import { Operator } from "../../models/operator";

export enum ActionOperatorTypes {
    LOAD_OPERATORS = '[Operator] Load Operators',
    LOAD_OPERATORS_SUCCESS = '[Operator] Load Operator Success',
    LOAD_ERROR = '[Operator] Load Error',
    LOAD_ID_OPERATOR = '[Operator] Load Id Operator'
}

export class LoadOperators implements Action {
    readonly type = ActionOperatorTypes.LOAD_OPERATORS;
}

export class LoadOperatorsSuccess implements Action {
    readonly type = ActionOperatorTypes.LOAD_OPERATORS_SUCCESS;

    constructor ( public payload: Operator[]) { }
}

export class LoadError implements Action {
    readonly type = ActionOperatorTypes.LOAD_ERROR;

    constructor( public payload: string) { }
}

export class LoadIdOperator implements Action {
    readonly type = ActionOperatorTypes.LOAD_ID_OPERATOR;

    constructor ( public payload: any) { }
}

export type AllOperatorActions = 
    |   LoadOperators
    |   LoadOperatorsSuccess
    |   LoadError
    |   LoadIdOperator;