import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowspeedSliderComponent } from './flowspeed-slider.component';

describe('FlowspeedSliderComponent', () => {
  let component: FlowspeedSliderComponent;
  let fixture: ComponentFixture<FlowspeedSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowspeedSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowspeedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
