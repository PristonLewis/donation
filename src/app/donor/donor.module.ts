import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorRoutingModule } from './donor-routing.module';
import { DonorHomeComponent } from './components/donor-home/donor-home.component';

@NgModule({
  declarations: [DonorHomeComponent],
  imports: [
    CommonModule,
    DonorRoutingModule
  ]
})
export class DonorModule { }
