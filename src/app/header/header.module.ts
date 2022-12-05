import { LangTranslateModule } from './../sharedModule/lang-translate.module';
import { SharedModule } from './../sharedModule/shared.module';
import { RouterModule } from '@angular/router';
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
    CommonModule,
    RouterModule,
    LangTranslateModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
