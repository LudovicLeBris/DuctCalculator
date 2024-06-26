import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularDuctSetupComponent } from './circular-duct-setup.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('CircularDuctSetupComponent', () => {
  let component: CircularDuctSetupComponent;
  let fixture: ComponentFixture<CircularDuctSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularDuctSetupComponent, MatIconTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularDuctSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
