import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './cart.actions';

export interface CartState {
  items: any[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product],
  })),
  on(removeFromCart, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id),
  })),
  on(clearCart, () => initialState)
);
