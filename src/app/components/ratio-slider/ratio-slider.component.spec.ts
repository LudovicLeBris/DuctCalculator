import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioSliderComponent } from './ratio-slider.component';

describe('RatioSliderComponent', () => {
  let component: RatioSliderComponent;
  let fixture: ComponentFixture<RatioSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatioSliderComponent]
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
