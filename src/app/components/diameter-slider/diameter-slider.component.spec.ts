import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiameterSliderComponent } from './diameter-slider.component';

describe('DiameterSliderComponent', () => {
  let component: DiameterSliderComponent;
  let fixture: ComponentFixture<DiameterSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiameterSliderComponent]
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
