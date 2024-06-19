import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioSliderComponent } from './ratio-slider.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('RatioSliderComponent', () => {
  let component: RatioSliderComponent;
  let fixture: ComponentFixture<RatioSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatioSliderComponent, MatIconTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
