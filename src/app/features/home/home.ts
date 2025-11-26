import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../../shared/components/slider/slider';
import { CategorySliderComponent } from '../../shared/components/category-slider/category-slider';
// import { FeaturedProductsComponent } from '../../shared/components/featuredProducts/featuredProducts.component';
import { ProductsComponent } from '../products/pages/products/products.component';
import { FeaturedProductsComponent } from '../../shared/components/featuredProducts/featuredProducts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SliderComponent, CategorySliderComponent, FeaturedProductsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  ngOnInit(): void {
    // يمكن تحميل بيانات إضافية هنا
  }
}
