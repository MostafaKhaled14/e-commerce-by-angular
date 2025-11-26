import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/productCard/productCard.component';
import { ProductsState } from '../../../../core/store/products/products.reducer';
import {
  selectAllProducts,
  selectError,
  selectLoading,
} from '../../../../core/store/products/products.selectors';
import { loadProducts } from '../../../../core/store/products/products.actions';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Observable<Product[]>;
  loading: Observable<boolean>;
  error: Observable<string | null>;

  constructor(private store: Store<{ products: ProductsState }>) {
    this.products = this.store.select(selectAllProducts);
    this.loading = this.store.select(selectLoading);
    this.error = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    // this.products.subscribe((products) => {
    //   console.log('Store Products:', products);
    // });
  }
}
