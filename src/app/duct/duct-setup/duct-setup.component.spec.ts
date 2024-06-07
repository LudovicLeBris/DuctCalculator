import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSetupComponent } from './duct-setup.component';

describe('DuctSetupComponent', () => {
  let component: DuctSetupComponent;
  let fixture: ComponentFixture<DuctSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuctSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
