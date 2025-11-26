import { createReducer, on } from '@ngrx/store';
// import { Product } from '../../models/product.model';
import { toggleWishlist } from './wishList.actions';
import { Product } from '../../../features/products/models/product.model';

export interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

export const wishlistReducer = createReducer(
  initialState,
  on(toggleWishlist, (state, { product }) => {
    const exists = state.items.some((p) => p.id === product.id);
    return exists
      ? { ...state, items: state.items.filter((p) => p.id !== product.id) }
      : { ...state, items: [...state.items, product] };
  })
);
