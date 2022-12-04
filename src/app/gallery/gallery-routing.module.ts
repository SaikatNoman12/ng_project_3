import { GalleryComponent } from './gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryItemComponent } from '../gallery-item/gallery-item.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: ':id',
    loadChildren: () => import('../gallery-item/gallery-item.module')
      .then(m => m.GalleryItemModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
