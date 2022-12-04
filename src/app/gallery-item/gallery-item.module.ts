import { SharedModule } from './../sharedModule/shared.module';
import { GalleryItemComponent } from './gallery-item.component';
import { GalleryItem } from './../appModal/galleryModal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemRoutingModule } from './gallery-item-routing.module';


@NgModule({
  declarations: [
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    GalleryItemRoutingModule,
  ],
  providers: [
    GalleryItem
  ],
  exports: [
    GalleryItemComponent
  ]
})
export class GalleryItemModule { 
}
