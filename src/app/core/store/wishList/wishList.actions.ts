import { createAction, props } from '@ngrx/store';
import { Product } from '../../../features/products/models/product.model';
// import { Product } from '../../models/product.model';

export const toggleWishlist = createAction(
  '[Wishlist] Toggle Item',
  props<{ product: Product }>()
);
