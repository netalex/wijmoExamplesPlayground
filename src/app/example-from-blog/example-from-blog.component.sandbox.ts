import {sandboxOf} from 'angular-playground';
import {ExampleFromBlogComponent} from './example-from-blog.component';

export default sandboxOf(ExampleFromBlogComponent)
  .add('default', {
    template: `<app-example-from-blog></app-example-from-blog>`
  });
