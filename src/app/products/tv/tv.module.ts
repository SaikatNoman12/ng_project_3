import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvComponent } from './tv.component';


@NgModule({
  declarations: [
    TvComponent
  ],
  imports: [
    CommonModule,
    TvRoutingModule
  ]
})
export class TvModule { }
