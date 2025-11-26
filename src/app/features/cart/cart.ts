import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item';
import { CartService } from '../../core/services/cart.service';
import { Store } from '@ngrx/store';
// import { CartState } from '../../core/state/cart/cart.reducer';
// import { removeFromCart } from '../../core/state/cart/cart.actions';
import { Observable } from 'rxjs';
import { removeFromCart } from '../../core/store/cart/cart.actions';
import { CartState } from '../../core/store/cart/cart.reducer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartItems: any;
  selectedItems = computed(() => this.cartItems().filter((i: any) => i.selected));
  total = computed(() =>
    this.selectedItems().reduce(
      (sum: number, item: any) => sum + item.product.price * item.quantity,
      0
    )
  );
  cart$: Observable<any[]>;

  constructor(private cartService: CartService, private store: Store<{ cart: CartState }>) {
    // this.cartItems = this.cartService.cartItems;
    this.cart$ = store.select((state) => state.cart.items);
  }

  handleQuantityChange(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  handleToggleSelect(id: number) {
    this.cartService.toggleSelect(id);
  }

  handleRemove(id: number) {
    // this.cartService.removeFromCart(id);
    this.store.dispatch(removeFromCart({ id }));
  }
}
