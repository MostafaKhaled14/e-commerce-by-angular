import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../../features/products/models/product.model';
// import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
  selected: boolean;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items = signal<CartItem[]>([]);

  cartItems = this.items.asReadonly();
  itemCount = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));

  addToCart(product: Product, quantity: number = 1) {
    this.items.update((items) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        items.push({ product, quantity, selected: true });
      }
      return [...items];
    });
  }

  updateQuantity(id: number, quantity: number) {
    this.items.update((items) =>
      items.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, quantity) } : i))
    );
  }

  toggleSelect(id: number) {
    this.items.update((items) =>
      items.map((i) => (i.product.id === id ? { ...i, selected: !i.selected } : i))
    );
  }

  removeFromCart(id: number) {
    this.items.update((items) => items.filter((i) => i.product.id !== id));
  }

  clearCart() {
    this.items.set([]);
  }
}
