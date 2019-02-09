import * as fromStoppages from '../actions/stoppage.actions';
import { Stoppage } from "../../models/stoppage";

export interface StoppageState {
    isLoading: boolean;
    stoppages: Stoppage[];
    msg_error: string;
    id: any;
}

export const initialState: StoppageState = {
    isLoading: false,
    stoppages: [],
    msg_error: '',
    id: null
}

export function StoppageReducer (state: StoppageState = initialState, action: fromStoppages.AllStopaggeActions): StoppageState {
    switch(action.type){
        case fromStoppages.ActionStoppageTypes.LOAD_STOPPAGES:
            return {
                ...state,
                isLoading: true
            }

        case fromStoppages.ActionStoppageTypes.LOAD_STOPPAGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                stoppages: action.payload
            }
        
        case fromStoppages.ActionStoppageTypes.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                msg_error: action.payload
            }

        case fromStoppages.ActionStoppageTypes.LOAD_ID_STOPPAGE:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        
        default:
            return state
    }
}