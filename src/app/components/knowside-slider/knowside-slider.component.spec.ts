import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowsideSliderComponent } from './knowside-slider.component';

describe('KnowsideSliderComponent', () => {
  let component: KnowsideSliderComponent;
  let fixture: ComponentFixture<KnowsideSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowsideSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowsideSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
