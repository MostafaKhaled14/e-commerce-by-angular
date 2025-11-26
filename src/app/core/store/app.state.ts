import { CartState } from './cart/cart.reducer';
import { ProductsState } from './products/products.reducer';
import { WishlistState } from './wishList/wishList.reducer';

export interface AppState {
  cart: CartState;
  wishlist: WishlistState;
  products: ProductsState;
}
