import * as fromUnplannedStop from '../actions/unplannedStoppage.actions';
import { UnplannedStoppage } from "../../models/unplannedStoppage";

export interface UnplannedStoppageState {
    isLoading: boolean;
    unplannedStoppages: UnplannedStoppage[];
    msg_error: string;
    id: any;
}

export const initialState: UnplannedStoppageState = {
    isLoading: false,
    unplannedStoppages: [],
    msg_error: '',
    id: null
}

export function StoppageReducer (state: UnplannedStoppageState = initialState, action: fromUnplannedStop.AllUnplannedstopActions): UnplannedStoppageState {
    switch(action.type){
        case fromUnplannedStop.ActionUnplannedStoppageTypes.LOAD_UNPLANNEDSTOP:
            return {
                ...state,
                isLoading: true
            }

            case fromUnplannedStop.ActionUnplannedStoppageTypes.LOAD_UNPLANNEDSTOP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                unplannedStoppages: action.payload
            }
        
            case fromUnplannedStop.ActionUnplannedStoppageTypes.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                msg_error: action.payload
            }

            case fromUnplannedStop.ActionUnplannedStoppageTypes.LOAD_ID_UNPLANNEDSTOP:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        
        default:
            return state
    }
}