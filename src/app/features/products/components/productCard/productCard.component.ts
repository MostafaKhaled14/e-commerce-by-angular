import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../../../core/services/cart.service';
// import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-productCard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productCard.component.html',
  styleUrl: './productCard.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isWishlisted = false;
  @Output() cardClick = new EventEmitter<void>();

  wishlist = false;

  constructor(
    private cartService: CartService,
    // private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    // this.wishlist = this.wishlistService.isInWishlist(this.product.id);
  }

  toggleWishlist(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.wishlist) {
      // this.wishlistService.removeFromWishlist(this.product.id);
    } else {
      // this.wishlistService.addToWishlist(this.product);
    }
    this.wishlist = !this.wishlist;
  }

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.cartService.addToCart(this.product);
    // يمكن إضافة Toast هنا
  }

  onCardClick(): void {
    this.cardClick.emit();
  }

  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }

  getSlicedStars(rating: number): number[] {
  const fullStars = this.getStarArray(rating).filter(s => s === 1).length;
  return [0, 1, 2, 3, 4].slice(fullStars);
}
}
