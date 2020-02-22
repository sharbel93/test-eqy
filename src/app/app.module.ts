import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BulkPaymentComponent } from './bulk-payment/bulk-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BulkPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
