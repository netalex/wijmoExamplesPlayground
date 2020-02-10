import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeComponent } from './notice/notice.component';

/* wijimo section */
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { ExampleFromBlogComponent } from './example-from-blog/example-from-blog.component';

// apply Wijmo license key
// import { setLicenseKey } from 'wijmo/wijmo';
// setLicenseKey('your license key goes here');


/* wijimo section */

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    ExampleFromBlogComponent
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
