import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirSetupComponent } from './air-setup.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('AirSetupComponent', () => {
  let component: AirSetupComponent;
  let fixture: ComponentFixture<AirSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirSetupComponent, MatIconTestingModule]
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
