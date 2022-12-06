import { HeaderComponent } from './../header/header.component';
import { LangTranslateModule } from './../sharedModule/lang-translate.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LangTranslateModule
  ]
})
export class HomeModule { }
