import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  // loadFeaturedProductsFailure,
  // loadFeaturedProductsSuccess,
  // loadFeaturedProducts,
} from './products.actions';
import { Product } from '../../../features/products/models/product.model';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, loading: true, error: null })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // // Featured Products
  // on(loadFeaturedProducts, (state) => ({ ...state, loading: true })),
  // on(loadFeaturedProductsSuccess, (state, { products }) => ({
  //   ...state,
  //   featured: products,
  //   loading: false,
  // })),
  // on(loadFeaturedProductsFailure, (state, { error }) => ({
  //   ...state,
  //   loading: false,
  //   error,
  // }))
);
