import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import { DonorRoutingModule } from './donor-routing.module';
import { DonorHomeComponent } from './components/donor-home/donor-home.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [DonorHomeComponent],
  imports: [
    CommonModule,
    DonorRoutingModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FieldsetModule
  ]
})
export class DonorModule { }
