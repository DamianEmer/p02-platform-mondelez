import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export enum ActionProductTypes {
    LOAD_PRODUCTS = '[Product] Load Products',
    LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
    LOAD_ERROR = '[Product] Load Error',
    LOAD_ID_PRODUCT = '[Product] Load Id Product',
}

export class LoadProducts implements Action {
    readonly type = ActionProductTypes.LOAD_PRODUCTS;

    constructor ( public payload?: any) { }
}

export class LoadProductsSuccess implements Action {
    readonly type = ActionProductTypes.LOAD_PRODUCTS_SUCCESS;

    constructor ( public payload: Product[]) { }
}

export class LoadError implements Action {
    readonly type = ActionProductTypes.LOAD_ERROR;

    constructor ( public payload: string) { }
}

export class LoadIdProduct implements Action {
    readonly type = ActionProductTypes.LOAD_ID_PRODUCT;

    constructor ( public payload: any) { }
}

export type AllProductActions = 
    |   LoadProducts
    |   LoadProductsSuccess
    |   LoadError
    |   LoadIdProduct;