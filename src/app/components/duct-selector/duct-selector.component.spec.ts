import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSelectorComponent } from './duct-selector.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('DuctSelectorComponent', () => {
  let component: DuctSelectorComponent;
  let fixture: ComponentFixture<DuctSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSelectorComponent, MatIconTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuctSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
