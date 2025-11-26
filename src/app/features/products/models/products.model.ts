import { Product } from './product.model';

export interface ProductsResponse {
  data: Product[];
  message?: string;
  status?: string;
}
