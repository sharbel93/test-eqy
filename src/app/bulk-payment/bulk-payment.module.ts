import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BulkPaymentComponent} from './bulk-payment.component';
import {BulkPaymentRoutingModule} from './bulk-payment-routing.module';
import {AppMaterialModule} from '../app-material/app-material.module';



@NgModule({
  declarations: [
    BulkPaymentComponent
  ],
  imports: [
    CommonModule,
    BulkPaymentRoutingModule,
    AppMaterialModule
  ]
})
export class BulkPaymentModule { }
