import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemsCalculatorContainerComponent } from './gems-calculator-container.component';

describe('GemsCalculatorContainerComponent', () => {
  let component: GemsCalculatorContainerComponent;
  let fixture: ComponentFixture<GemsCalculatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemsCalculatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemsCalculatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
