import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ExampleFromBlogComponent } from './example-from-blog.component';
describe('ExampleFromBlogComponent', () => {
  let component: ExampleFromBlogComponent;
  let fixture: ComponentFixture<ExampleFromBlogComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ExampleFromBlogComponent]
    });
    fixture = TestBed.createComponent(ExampleFromBlogComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('title defaults to: Wijmo Starter App', () => {
    expect(component.title).toEqual('Wijmo Starter App');
  });
});
