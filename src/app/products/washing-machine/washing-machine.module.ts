import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WashingMachineRoutingModule } from './washing-machine-routing.module';
import { WashingMachineComponent } from './washing-machine.component';


@NgModule({
  declarations: [
    WashingMachineComponent
  ],
  imports: [
    CommonModule,
    WashingMachineRoutingModule
  ]
})
export class WashingMachineModule { }
