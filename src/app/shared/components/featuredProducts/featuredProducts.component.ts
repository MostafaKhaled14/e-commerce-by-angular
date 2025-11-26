import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../features/products/services/products.service';
import { ProductCardComponent } from '../../../features/products/components/productCard/productCard.component';
import { Product } from '../../../features/products/models/product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { loadFeaturedProducts } from '../../../core/store/products/products.actions';
// import { selectFeaturedProducts } from '../../../core/store/products/products.selectors';

@Component({
  selector: 'app-featuredProducts',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './featuredProducts.component.html',
  styleUrl: './featuredProducts.component.scss',
})
export class FeaturedProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error = '';

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts(): void {
    this.ProductsService.getAll().subscribe({
      next: (data) => {
        this.products = data.data.slice(0, 8);
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });
  }


  // featuredProducts$!: Observable<Product[]>;

  // constructor(private store: Store) {}

  // ngOnInit() {
  //   this.store.dispatch(loadFeaturedProducts());
  //   this.featuredProducts$ = this.store.select(selectFeaturedProducts);
  // }
}
