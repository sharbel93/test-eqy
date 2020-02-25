import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { payments } from './data';
import {PaginationInstance} from "ngx-pagination";
@Component({
  selector: 'app-bulk-payment',
  templateUrl: './bulk-payment.component.html',
  styleUrls: ['./bulk-payment.component.css']
})
export class BulkPaymentComponent implements OnInit {
  pageSize: any = 5;
  page: any = 1;
  Payments: any[];
  startValue: any;
  lastValue: any;

  constructor() { }

  ngOnInit(): void {
    this.Payments = payments;
  }

  // public setPageNumbers(pageNo,pageSize) {
  //   this.startValue = (pageNo * pageSize) - (pageSize -1)
  //   this.lastValue = this.agentParms.pageNo * this.agentParms.pageSize;
  //   this.lastValue = this.lastValue > this.agentTotal ? this.agentTotal: this.lastValue;
  // }
}
