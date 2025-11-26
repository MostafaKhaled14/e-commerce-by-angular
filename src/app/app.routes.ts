import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Cart } from './features/cart/cart';
import { Wishlist } from './features/wishlist/wishlist';
import { Categories } from './features/categories/categories';
import { Brands } from './features/brands/brands';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/register/signup.component';
import { ProductsComponent } from './features/products/pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'wishlist',
    component: Wishlist,
  },
  {
    path: 'categories',
    component: Categories,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'brands',
    component: Brands,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: '**', redirectTo: '' },
];
