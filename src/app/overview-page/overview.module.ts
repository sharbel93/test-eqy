import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverviewPageComponent} from './overview-page.component';
import {OverviewRoutingModule} from './overview-routing.module';
import {AppMaterialModule} from '../app-material/app-material.module';



@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    AppMaterialModule
  ]
})
export class OverviewModule { }
