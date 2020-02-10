import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [WjGridModule,
      WjChartModule]
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
