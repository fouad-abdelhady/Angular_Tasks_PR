import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { BillComponent } from './bill/bill.component';
import { SharedComponentsModule } from '../shared/components/sharedComponents.module';


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
    BillComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedComponentsModule
  ]
})
export class CartModule { }
