import { ServicesComponent } from './services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ServicesComponent
  },
  {
    path: ':serviceId',
    loadChildren: () => import('../services-item/services-item.module')
      .then(m => m.ServicesItemModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
