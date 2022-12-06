import { HeaderModule } from './../header/header.module';
import { HeaderComponent } from './../header/header.component';
import { HeaderService } from './../appServices/header.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    HeaderService
  ]
})
export class SharedModule { }
