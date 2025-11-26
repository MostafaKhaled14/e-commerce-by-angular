// src/app/features/cart/cart/cart-item/cart-item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CartItem {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
  quantity: number;
  selected: boolean;
}

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItemComponent {
  @Input() item!: CartItem;
  @Output() quantityChange = new EventEmitter<{id: number, quantity: number}>();
  @Output() toggleSelect = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onQuantityChange(quantity: number) {
    this.quantityChange.emit({ id: this.item.product.id, quantity: Math.max(1, quantity) });
  }

  onToggleSelect() {
    this.toggleSelect.emit(this.item.product.id);
  }

  onRemove() {
    this.remove.emit(this.item.product.id);
  }
}
