import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureSliderComponent } from './temperature-slider.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('TemperatureSliderComponent', () => {
  let component: TemperatureSliderComponent;
  let fixture: ComponentFixture<TemperatureSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureSliderComponent, MatIconTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
