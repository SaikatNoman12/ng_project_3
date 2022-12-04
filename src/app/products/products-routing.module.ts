import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'washing-machine',
    loadChildren: () => import('./washing-machine/washing-machine.module')
      .then(m => m.WashingMachineModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./mobile/mobile.module')
      .then(m => m.MobileModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('./tv/tv.module')
      .then(m => m.TvModule)
  },
  {
    path: 'laptop',
    loadChildren: () => import('./laptop/laptop.module')
      .then(m => m.LaptopModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
