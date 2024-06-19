import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltitudeSliderComponent } from './altitude-slider.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('AltitudeSliderComponent', () => {
  let component: AltitudeSliderComponent;
  let fixture: ComponentFixture<AltitudeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltitudeSliderComponent, MatIconTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltitudeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
