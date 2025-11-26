import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  // loadFeaturedProducts,
  // loadFeaturedProductsSuccess,
  // loadFeaturedProductsFailure,
} from './products.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductsService } from '../../../features/products/services/products.service';

@Injectable()
export class ProductsEffects {
  loadProducts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadProducts),
        mergeMap(() =>
          this.productsService.getAll().pipe(
            map((response) => loadProductsSuccess({ products: response.data })),
            catchError((error) => of(loadProductsFailure({ error: error.message })))
          )
        )
      ),
    { functional: true }
  );
  constructor(private actions$: Actions, private productsService: ProductsService) {}

  // loadFeaturedProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadFeaturedProducts),
  //     mergeMap(() =>
  //       this.productsService.getFeatured().pipe(
  //         map((response) => loadFeaturedProductsSuccess({ products: response.data })),
  //         catchError((error) => of(loadFeaturedProductsFailure({ error: error.message })))
  //       )
  //     )
  //   )
  // );

}
