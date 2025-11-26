import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorySlider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-slider.html',
  styleUrl: './category-slider.scss'
})
export class CategorySliderComponent {
  categories = [
    { name: 'Electronics', image: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Electronics', link: '/products?category=electronics' },
    { name: 'Fashion', image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Fashion', link: '/products?category=fashion' },
    { name: 'Home & Garden', image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Home', link: '/products?category=home' },
    { name: 'Sports', image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Sports', link: '/products?category=sports' }
  ];
}
