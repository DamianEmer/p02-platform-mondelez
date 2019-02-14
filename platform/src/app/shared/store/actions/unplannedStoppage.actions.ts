import { Action } from '@ngrx/store';
import { UnplannedStoppage } from '../../models/unplannedStoppage';

export enum ActionUnplannedStoppageTypes {
    LOAD_UNPLANNEDSTOP = '[Unplanned Stop] Load UnplannedStop',
    LOAD_UNPLANNEDSTOP_SUCCESS = '[Unplanned Stop] Load Unplannedstop Success',
    LOAD_ERROR = '[Unplanned Stop] Load Error',
    LOAD_ID_UNPLANNEDSTOP = '[Unplanned Stop] Load Id Unplannedstop'
}

export class LoadUnplannedStop implements Action {
    readonly type = ActionUnplannedStoppageTypes.LOAD_UNPLANNEDSTOP;

    constructor ( public payload?: any) { }
}

export class LoadUnplannedStopSuccess implements Action {
    readonly type = ActionUnplannedStoppageTypes.LOAD_UNPLANNEDSTOP_SUCCESS;

    constructor ( public payload: UnplannedStoppage[]) { }
}

export class LoadError implements Action {
    readonly type = ActionUnplannedStoppageTypes.LOAD_ERROR;

    constructor ( public payload: string) { }
}

export class LoadIdUnplannedStop implements Action {
    readonly type = ActionUnplannedStoppageTypes.LOAD_ID_UNPLANNEDSTOP;

    constructor ( public payload: any) { }
}

export type AllUnplannedstopActions = 
    |   LoadUnplannedStop
    |   LoadUnplannedStopSuccess
    |   LoadError
    |   LoadIdUnplannedStop;