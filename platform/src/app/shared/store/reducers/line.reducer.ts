import { ActionLineTypes, AllLineActions } from "../actions/line.actions";
import { Line } from "../../models/line";

export interface LineState {
    isLoading: boolean;
    lines: Line[];
    msg_error: string;
    id: any;
}

export const initialState: LineState = {
    isLoading: false,
    lines: [],
    msg_error: '',
    id: null
}

export function LineReducer(state: LineState = initialState, action: AllLineActions): LineState {
    switch (action.type) {
        case ActionLineTypes.LOAD_LINES:
            return {
                ...state,
                isLoading: true
            }
        case ActionLineTypes.LOAD_LINES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                lines: action.payload
            }
        case ActionLineTypes.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                msg_error: action.payload
            }
        case ActionLineTypes.LOAD_ID_LINE:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        default:
            return state
    }
}