import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderItemComponent } from './header-item/header-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }