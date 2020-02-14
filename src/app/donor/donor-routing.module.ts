import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorHomeComponent } from './components/donor-home/donor-home.component';
const routes: Routes = [{path: 'donorhome', component: DonorHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorRoutingModule { }
