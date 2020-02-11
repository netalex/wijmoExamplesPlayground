import { sandboxOf } from 'angular-playground';
import { EmptyChartComponent } from './empty-chart.component';

export default sandboxOf(EmptyChartComponent)
  .add('default', {
    template: `<app-empty></app-empty>`
  })
  .add('test', {
    template: `<app-empty [data]="[12,23,1,26]" ></app-empty>`
  });
