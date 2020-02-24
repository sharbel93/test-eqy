import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverviewPageComponent} from './overview-page.component';
import {OverviewRoutingModule} from './overview-routing.module';
import {AppMaterialModule} from '../app-material/app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    ChartsModule
  ]
})
export class OverviewModule { }
