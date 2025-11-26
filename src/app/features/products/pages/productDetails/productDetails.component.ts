import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/productCard/productCard.component';
// import { ProductsService } from '../services/products.service';
// import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone:true,
  imports:[CommonModule, ProductCardComponent],
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.productsService.getById(id).subscribe((res: any) => {
      this.product = res.data;
      this.relatedProducts = res.related;
    });
  }

  addToCart(p: Product) {
    console.log('Added to cart: ', p);
  }

  toggleWishlist(p: Product) {
    // p.inWishlist = !p.inWishlist;
  }
}
