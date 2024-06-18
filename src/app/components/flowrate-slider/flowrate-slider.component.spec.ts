import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowrateSliderComponent } from './flowrate-slider.component';

describe('FlowrateSliderComponent', () => {
  let component: FlowrateSliderComponent;
  let fixture: ComponentFixture<FlowrateSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowrateSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowrateSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
