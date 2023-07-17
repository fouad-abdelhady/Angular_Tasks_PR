import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsFilterComponent } from './filter/filters.component';
import { ProductItemComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { SharedComponentsModule } from '../shared/components/sharedComponents.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    ProductsFilterComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    SharedComponentsModule
  ]
})
export class ProductsModule { }
