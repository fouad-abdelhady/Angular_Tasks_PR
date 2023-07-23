import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
