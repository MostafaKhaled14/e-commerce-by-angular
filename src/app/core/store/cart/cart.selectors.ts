import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCartState = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

export const selectCartCount = createSelector(
  selectCartState,
  (state) => state.items.length
);
