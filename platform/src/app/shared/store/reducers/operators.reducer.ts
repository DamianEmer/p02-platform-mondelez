import { ActionOperatorTypes, AllOperatorActions } from "../actions/operator.actions";
import { Operator } from "../../models/operator";

export interface OperatorState {
    isLoading: boolean;
    operators: Operator[];
    msg_error: string;
    id: string;
}

export const initialState: OperatorState = {
    isLoading: false,
    operators: [],
    msg_error: '',
    id: null
}

export function OperatorReducer(state: OperatorState = initialState, action: AllOperatorActions): OperatorState {
    switch (action.type) {
        case ActionOperatorTypes.LOAD_OPERATORS:
            return {
                ...state,
                isLoading: true
            }
        case ActionOperatorTypes.LOAD_OPERATORS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                operators: action.payload
            }
        case ActionOperatorTypes.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                msg_error: action.payload
            }
        case ActionOperatorTypes.LOAD_ID_OPERATOR:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }
        default:
            return state
    }
}