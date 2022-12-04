import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaptopRoutingModule } from './laptop-routing.module';
import { LaptopComponent } from './laptop.component';


@NgModule({
  declarations: [
    LaptopComponent
  ],
  imports: [
    CommonModule,
    LaptopRoutingModule
  ]
})
export class LaptopModule { }
