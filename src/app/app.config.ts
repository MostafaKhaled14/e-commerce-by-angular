import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { cartReducer } from './core/store/cart/cart.reducer';
import { wishlistReducer } from './core/store/wishList/wishList.reducer';
import { productsReducer } from './core/store/products/products.reducer';
import { ProductsEffects } from './core/store/products/products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(NgbModule),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideStore({
      cart: cartReducer,
      wishlist: wishlistReducer,
      products: productsReducer,
    }),
    provideEffects([ProductsEffects]),
  ],
};
