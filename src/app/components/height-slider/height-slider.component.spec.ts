import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightSliderComponent } from './height-slider.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('HeightSliderComponent', () => {
  let component: HeightSliderComponent;
  let fixture: ComponentFixture<HeightSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeightSliderComponent, MatIconTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
