import { ServiceItem } from './../appModal/servicesModal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesItemRoutingModule } from './services-item-routing.module';
import { ServicesItemComponent } from './services-item.component';


@NgModule({
  declarations: [
    ServicesItemComponent
  ],
  imports: [
    CommonModule,
    ServicesItemRoutingModule
  ],
  providers:[
    ServiceItem
  ]
})
export class ServicesItemModule { }
