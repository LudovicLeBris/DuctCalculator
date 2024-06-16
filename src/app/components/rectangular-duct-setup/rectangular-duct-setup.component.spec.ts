import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularDuctSetupComponent } from './rectangular-duct-setup.component';

describe('RectangularDuctSetupComponent', () => {
  let component: RectangularDuctSetupComponent;
  let fixture: ComponentFixture<RectangularDuctSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RectangularDuctSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangularDuctSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
