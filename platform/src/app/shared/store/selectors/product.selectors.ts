import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from '../reducers/index';
import { ProductState } from '../reducers/product.reducer';

const getProductState = createFeatureSelector<AppState, ProductState>('products');

export const getProducts = createSelector(getProductState, (state: ProductState) => state.products);