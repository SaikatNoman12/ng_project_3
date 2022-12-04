import { ServiceItem } from './../appModal/servicesModal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  providers:[
    ServiceItem
  ]
})
export class ServicesModule { }
