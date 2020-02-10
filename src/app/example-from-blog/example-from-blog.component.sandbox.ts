import { sandboxOf } from 'angular-playground';
import  * as grid from 'wijmo/wijmo.angular2.grid';
import  * as chart from 'wijmo/wijmo.angular2.chart';
import { ExampleFromBlogComponent } from './example-from-blog.component';

export default sandboxOf(ExampleFromBlogComponent)
  .add('default', {
    template: `<app-example-from-blog></app-example-from-blog>`
  });
