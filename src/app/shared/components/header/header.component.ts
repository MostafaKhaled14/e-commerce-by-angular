import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';

interface NavLink {
  id: number;
  href: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  itemCount: number = 0;

  navLinks: NavLink[] = [
    { id: 1, href: '/', label: 'Home' },
    { id: 2, href: '/cart', label: 'Cart' },
    { id: 3, href: '/wishlist', label: 'Wishlist' },
    { id: 4, href: '/categories', label: 'Categories' },
    { id: 5, href: '/products', label: 'Products' },
    { id: 6, href: '/brands', label: 'Brands' },
  ];

  constructor(private CartService: CartService, private authService: AuthService) {
    this.itemCount = this.CartService.itemCount();
  }

  onLogout() {
    this.authService.logout();
  }
}
