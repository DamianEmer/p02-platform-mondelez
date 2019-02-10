import { Action } from "@ngrx/store";
import { Turn } from "../../models/turn";

export enum ActionTurnTypes {
    LOAD_TURNS = '[Turn] Load Turns',
    LOAD_TURNS_SUCCESS = '[Turn] Load Turns Success',
    LOAD_ERROR = '[Turn] Load Error',
    LOAD_ID_TURN = '[Turn] Load Id Turn'
}

export class LoadTurns implements Action {
    readonly type = ActionTurnTypes.LOAD_TURNS;
}

export class LoadTurnSuccess implements Action {
    readonly type = ActionTurnTypes.LOAD_TURNS_SUCCESS;

    constructor ( public payload: Turn[]) { }
}

export class LoadError implements Action {
    readonly type = ActionTurnTypes.LOAD_ERROR;

    constructor ( public payload: string) { }
}

export class LoadIdTurn implements Action {
    readonly type = ActionTurnTypes.LOAD_ID_TURN;

    constructor ( public payload: any) { }
}

export type AllTurnAction =   
    |   LoadTurns
    |   LoadTurnSuccess
    |   LoadError
    |   LoadIdTurn;