import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirSetupComponent } from './air-setup.component';

describe('AirSetupComponent', () => {
  let component: AirSetupComponent;
  let fixture: ComponentFixture<AirSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
