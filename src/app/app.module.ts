import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeComponent } from './notice/notice.component';

/* wijimo section */
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule, WjFlexChartSeries, WjFlexChart } from 'wijmo/wijmo.angular2.chart';
import { ExampleFromBlogComponent } from './example-from-blog/example-from-blog.component';
import { EmptyChartComponent } from './empty-chart/empty-chart.component';

// apply Wijmo license key
// import { setLicenseKey } from 'wijmo/wijmo';
// import * as wjChart from 'wijmo/wijmo.angular2.chart';
// setLicenseKey('your license key goes here');


/* wijimo section */

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    ExampleFromBlogComponent,
    EmptyChartComponent,
    // WjFlexChart, WjFlexChartSeries
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule,
    WjChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
