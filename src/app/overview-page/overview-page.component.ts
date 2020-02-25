import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {
  Currencies: any[];
  StateDisplay: any[];
  selected: any;
  selectedState: any;
  public lineChartData: ChartDataSets[] = [
    { data: [0, 36000, 0, 0,8000, 0, 25000]}
  ];
  public lineChartLabels: Label[] = ['Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'June 7', 'Jun 8'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(105, 174, 255, 0.47)',
      pointBackgroundColor: 'rgba(0,0,0,0.0)',
      pointBorderColor: '#603b80',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointRadius: 5,
      pointBorderWidth: 2
    }
  ];
  // #603b80
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  multi: any[];
  view: any[] = [800, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = false;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';
  barPadding = 5;
  groupPadding = 2;
  colorScheme = {
    domain: ['#aed3ff']
  };
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor() {
    Object.assign(this, { multi })
  }
  ngOnInit(): void {
    this.Currencies = [
      { id: 1, name: 'KES'},
      { id: 2, name: 'USD'},
      { id: 3, name: 'EUR'},
    ];
    this.StateDisplay = [
      { id: 1, name: 'Total Volume'},
      { id: 2, name: 'Total Shares'},
      { id: 3, name: 'Total Bond'},
    ];

    this.selected = new FormControl(1);
    this.selectedState = new FormControl('Total Volume');
  }

}
