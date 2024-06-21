import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiameterSliderComponent } from './diameter-slider.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('DiameterSliderComponent', () => {
  let component: DiameterSliderComponent;
  let fixture: ComponentFixture<DiameterSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiameterSliderComponent, MatIconTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiameterSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
