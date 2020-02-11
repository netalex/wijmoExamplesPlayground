import { Component, OnInit } from '@angular/core';
import * as wjChart from 'wijmo/wijmo.angular2.chart';

/* @Component({
  selector: 'app-empty-chart',
  templateUrl: './empty-chart.component.html',
  styleUrls: ['./empty-chart.component.scss']
})
export class EmptyChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

} */



@Component({
    // directives: [wjChart.WjFlexChart, wjChart.WjFlexChartSeries],
    template: `
      <wj-flex-chart [itemsSource]="data" [bindingX]="'x'">
          <wj-flex-chart-series [binding]="'y'"></wj-flex-chart-series>
      </wj-flex-chart>`,
    selector: 'app-empty',
})
export class EmptyChartComponent {
    data: any[];

    constructor() { }

    ngOnInit() {
    }

}
