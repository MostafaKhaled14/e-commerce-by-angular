import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../productCard/productCard.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../../../core/store/products/products.actions';
import { selectAllProducts } from '../../../../core/store/products/products.selectors';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productsList.component.html',
  styleUrl: './productsList.component.scss'
})
export class ProductsListComponent {
  @Input() products: Product[] = [];

  // products$!: Observable<Product[]>;

  // constructor(private store: Store) {}

  // ngOnInit() {
  //   this.store.dispatch(loadProducts());
  //   this.products$ = this.store.select(selectAllProducts);
  // }
}
