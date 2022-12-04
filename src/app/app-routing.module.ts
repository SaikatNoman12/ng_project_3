import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryItemModule } from './gallery-item/gallery-item.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module')
      .then(m => m.GalleryModule)
  },
  // {
  //   path: ':/id',
  //   loadChildren: () => import('./gallery-item/gallery-item.module')
  //     .then(m => m.GalleryItemModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
