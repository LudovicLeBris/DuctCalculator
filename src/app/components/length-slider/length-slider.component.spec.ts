import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthSliderComponent } from './length-slider.component';

describe('LengthSliderComponent', () => {
  let component: LengthSliderComponent;
  let fixture: ComponentFixture<LengthSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LengthSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LengthSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
