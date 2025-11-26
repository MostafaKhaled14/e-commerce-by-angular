import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { id: 1, href: '/', label: 'Home' },
    { id: 2, href: '/products', label: 'Products' },
    { id: 3, href: '/brands', label: 'Brands' },
    { id: 4, href: '/categories', label: 'Categories' },
  ];
  followUsLinks = [
    { id: 1, href: '#', iconName: 'bi bi-facebook fs-5', colorsClass: 'hover-text-primary' },
    { id: 2, href: '#', iconName: 'bi bi-instagram fs-5', colorsClass: 'hover-text-pink' },
    { id: 3, href: '#', iconName: 'bi bi-twitter fs-5', colorsClass: 'hover-text-info' },
    { id: 4, href: '#', iconName: 'bi bi-envelope fs-5', colorsClass: 'hover-text-success' },
  ];
}
