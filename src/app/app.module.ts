import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { DonorRoutingModule } from './donor/donor-routing.module';
import { RootModule } from './root/root.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { DonorModule } from './donor/donor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootModule,
    AdminRoutingModule,
    DonorRoutingModule,
    SharedModule,
    AdminModule,
    DonorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
