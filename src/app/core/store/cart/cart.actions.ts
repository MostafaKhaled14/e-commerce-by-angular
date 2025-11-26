import { createAction, props } from '@ngrx/store';
import { Product } from '../../../features/products/models/product.model';
// import { Product } from '../../models/product.model';

export const addToCart = createAction('[Cart] Add Item', props<{ product: Product }>());

export const removeFromCart = createAction('[Cart] Remove Item', props<{ id: number }>());

export const clearCart = createAction('[Cart] Clear');
