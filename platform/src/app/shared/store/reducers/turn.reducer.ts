import { ActionTurnTypes, AllTurnAction } from "../actions/turn.actions";
import { Turn } from "../../models/turn";

export interface TurnState {
    isLoading: boolean;
    turns: Turn[];
    msg_error: string;
    id: string;
}

export const initialState: TurnState = {
    isLoading: false,
    turns: [],
    msg_error: '',
    id: null
}

export function TurnReducer(state: TurnState = initialState, action: AllTurnAction): TurnState {
    switch(action.type){
        case ActionTurnTypes.LOAD_TURNS: 
            return {
                ...state,
                isLoading: true
            }
        case ActionTurnTypes.LOAD_TURNS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                turns: action.payload
            }
        case ActionTurnTypes.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                msg_error: action.payload
            }
        case ActionTurnTypes.LOAD_ID_TURN:
            return{
                ...state,
                isLoading: false,
                id: action.payload
            }
    }
}