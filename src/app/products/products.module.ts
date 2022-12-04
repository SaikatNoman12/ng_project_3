import { ProductsItem } from './../appModal/productsModal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  providers:[
    ProductsItem
  ]
})
export class ProductsModule { }
