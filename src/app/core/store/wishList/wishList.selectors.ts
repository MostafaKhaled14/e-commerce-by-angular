import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectWishlistState = (state: AppState) => state.wishlist;

export const selectWishlistItems = createSelector(
  selectWishlistState,
  (state) => state.items
);

export const selectWishlistCount = createSelector(
  selectWishlistState,
  (state) => state.items.length
);
