import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [LoaderComponent, ErrorComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
