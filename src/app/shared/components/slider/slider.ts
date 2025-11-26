import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss'
})
export class SliderComponent {
  slides = [
    {
      image: '../../../../assets/slider/grocery-banner-2.jpeg',
      title: 'New Arrivals',
      subtitle: 'Check out our latest collection'
    },
    {
      image: '../../../../assets/slider/grocery-banner.png',
      title: 'Best Sellers',
      subtitle: 'Most popular products'
    },
    {
      image: '../../../../assets/slider/slider-2.jpeg',
      title: 'Special Offers',
      subtitle: 'Limited time discounts'
    },
    {
      image: '../../../../assets/slider/slider-image-1.jpeg',
      title: 'Special Offers',
      subtitle: 'Limited time discounts'
    },
    {
      image: '../../../../assets/slider/slider-image-2.jpeg',
      title: 'Special Offers',
      subtitle: 'Limited time discounts'
    },
    {
      image: '../../../../assets/slider/slider-image-3.jpeg',
      title: 'Special Offers',
      subtitle: 'Limited time discounts'
    },
  ];
}
