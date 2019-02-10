import * as fromProducts from '../actions/product.actions';
import { Product } from "../../models/product";

export interface ProductState {
    isLoading: boolean;
    products: Product[];
    msg_error: string;
    id: any;
}

export const initialState: ProductState = {
    isLoading: false,
    products: [],
    msg_error: '',
    id: null
}

export function ProductReducer(state: ProductState = initialState, action: fromProducts.AllProductActions): ProductState {
    switch (action.type) {
        case fromProducts.ActionProductTypes.LOAD_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
            
        case fromProducts.ActionProductTypes.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }

        case fromProducts.ActionProductTypes.LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                msg_error: action.payload
            }

        case fromProducts.ActionProductTypes.LOAD_ID_PRODUCT:
            return {
                ...state,
                isLoading: false,
                id: action.payload
            }

        default:
            return state
    }
}