import { Action } from '@ngrx/store';
import { Stoppage } from '../../models/stoppage';

export enum ActionStoppageTypes {
    LOAD_STOPPAGES = '[Stoppage] Load Stoppages',
    LOAD_STOPPAGES_SUCCESS = '[Stoppage] Load Stoppages Success',
    LOAD_ERROR = '[Stoppage] Load Error',
    LOAD_ID_STOPPAGE = '[Stoppage] Load Id Stoppage'
}

export class LoadStoppages implements Action {
    readonly type = ActionStoppageTypes.LOAD_STOPPAGES;

    constructor ( public payload?: any) { }
}

export class LoadStoppagesSuccess implements Action {
    readonly type = ActionStoppageTypes.LOAD_STOPPAGES_SUCCESS;

    constructor ( public payload: Stoppage[]) { }
}

export class LoadError implements Action {
    readonly type = ActionStoppageTypes.LOAD_ERROR;

    constructor ( public payload: string) { }
}

export class LoadIdStoppage implements Action {
    readonly type = ActionStoppageTypes.LOAD_ID_STOPPAGE;

    constructor ( public payload: any) { }
}

export type AllStopaggeActions = 
    |   LoadStoppages
    |   LoadStoppagesSuccess
    |   LoadError
    |   LoadIdStoppage