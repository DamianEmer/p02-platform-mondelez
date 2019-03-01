import { Action } from '@ngrx/store';
import { Line2 } from '../../models/Line2';

export enum ActionLineTypes {
    LOAD_LINES = '[Line] Load Lines',
    LOAD_LINES_SUCCESS = '[Line] Load Lines Success',
    LOAD_ERROR = '[Line] Load Error',
    LOAD_ID_LINE = '[Line] Load Id Line'
}

export class LoadLines implements Action {
    readonly type = ActionLineTypes.LOAD_LINES;

    constructor (public payload?: any) { }
}

export class LoadLineSuccess implements Action {
    readonly type = ActionLineTypes.LOAD_LINES_SUCCESS;

    constructor ( public payload: Line2[]) { }
}

export class LoadError implements Action {
    readonly type = ActionLineTypes.LOAD_ERROR;

    constructor (public payload: string) { }
}

export class LoadIdLine implements Action {
    readonly type = ActionLineTypes.LOAD_ID_LINE;

    constructor ( public payload: any) { }
}

export type AllLineActions = 
    |   LoadLines
    |   LoadLineSuccess
    |   LoadError
    |   LoadIdLine;