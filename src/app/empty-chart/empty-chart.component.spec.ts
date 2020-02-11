import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EmptyChartComponent } from './empty-chart.component';
describe('EmptyChartComponent', () => {
  let component: EmptyChartComponent;
  let fixture: ComponentFixture<EmptyChartComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EmptyChartComponent]
    });
    fixture = TestBed.createComponent(EmptyChartComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
