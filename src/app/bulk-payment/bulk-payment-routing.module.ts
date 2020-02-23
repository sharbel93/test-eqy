import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BulkPaymentComponent} from './bulk-payment.component';

const routes: Routes = [
  { path: '',
    component: BulkPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkPaymentRoutingModule { }
