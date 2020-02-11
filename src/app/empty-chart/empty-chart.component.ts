import {Component, OnInit} from '@angular/core';
import {log} from 'util';

@Component({
  // directives: [wjChart.WjFlexChart, wjChart.WjFlexChartSeries],
  template: `
    <wj-flex-chart [itemsSource]="data" [bindingX]="'x'">
      <wj-flex-chart-series [binding]="'y'"></wj-flex-chart-series>
    </wj-flex-chart>`,
  selector: 'app-empty',
})
export class EmptyChartComponent implements OnInit {
  data: any[];

  constructor() {
  }

  ngOnInit() {
    log('ngOnInit empty chart');
  }

}
