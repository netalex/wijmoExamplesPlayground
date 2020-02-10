import { Component, OnInit, ViewChild } from "@angular/core";

// import Wijmo components
import  * as grid from 'wijmo/wijmo.angular2.grid';
import  * as chart from 'wijmo/wijmo.angular2.chart';
import {  WjFlexGrid } from 'wijmo/wijmo.angular2.grid'
import {  WjFlexChart, WjFlexChartSeries } from 'wijmo/wijmo.angular2.chart'
import { CollectionView } from "wijmo/wijmo";

@Component({
  selector: "app-example-from-blog",
  templateUrl: "./example-from-blog.component.html",
  styleUrls: ["./example-from-blog.component.scss"]
})
export class ExampleFromBlogComponent implements OnInit {
  @ViewChild('flex', { static: false }) flex: WjFlexGrid;
  @ViewChild('chart', { static: false }) chart: WjFlexChart;
  @ViewChild('wj-flex-chart-series', { static: false }) WjFlexChartSeries: WjFlexChartSeries;
  title = "Wijmo Starter App";
  data = this.getData();
  getData() {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < countries.length; i++) {
      data.push({
        country: countries[i],
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000,
        downloads: Math.round(Math.random() * 20000),
      });
      console.log('data: ', data);

    }
    return new CollectionView(data);
  }

  constructor() {}

  ngOnInit() {}
}
