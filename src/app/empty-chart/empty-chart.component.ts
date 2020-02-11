import {Component, OnInit, Input} from '@angular/core';
import {log} from 'util';

@Component({
  // directives: [wjChart.WjFlexChart, wjChart.WjFlexChartSeries],
  template: `
  <div class="badge badge-pill badge-primary">Text</div>
    <wj-flex-chart [itemsSource]="data" [bindingX]="'x'">
      <wj-flex-chart-series [binding]="'y'"></wj-flex-chart-series>
    </wj-flex-chart>`,
  selector: 'app-empty',
})
export class EmptyChartComponent implements OnInit {
  @Input() data: any[];

  constructor() {
  }

  ngOnInit() {
    log('ngOnInit empty chart');
  }

}
