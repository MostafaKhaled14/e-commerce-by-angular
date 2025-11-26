import { createAction, props } from '@ngrx/store';
import { Product } from '../../../features/products/models/product.model';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

// // ⭐ تحميل المنتجات المميزة
// export const loadFeaturedProducts = createAction('[Products] Load Featured');
// export const loadFeaturedProductsSuccess = createAction(
//   '[Products] Load Featured Success',
//   props<{ products: Product[] }>()
// );
// export const loadFeaturedProductsFailure = createAction(
//   '[Products] Load Featured Failure',
//   props<{ error: string }>()
// );
