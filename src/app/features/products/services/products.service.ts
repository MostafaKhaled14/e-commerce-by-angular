import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
// import { Product } from '../../../core/models/product.model';
import { ProductsResponse } from '../models/products.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<ProductsResponse> {
    return this.apiService.get<ProductsResponse>('/products');
  }
  // getFeatured(): Observable<ProductsResponse> {
  //   return this.apiService.get<ProductsResponse>('/products');
  // }

  getById(id: number): Observable<Product> {
    return this.apiService.get<Product>(`/products/${id}`);
  }

  // getByCategory(category: string): Observable<Product[]> {
  //   return this.apiService.get<Product[]>(`/products?category=${category}`);
  // }
}
