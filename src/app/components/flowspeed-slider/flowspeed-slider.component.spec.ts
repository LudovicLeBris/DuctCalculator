import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowspeedSliderComponent } from './flowspeed-slider.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('FlowspeedSliderComponent', () => {
  let component: FlowspeedSliderComponent;
  let fixture: ComponentFixture<FlowspeedSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowspeedSliderComponent, MatIconTestingModule]
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
