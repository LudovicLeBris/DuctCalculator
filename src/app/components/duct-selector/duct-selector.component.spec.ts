import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuctSelectorComponent } from './duct-selector.component';

describe('DuctSelectorComponent', () => {
  let component: DuctSelectorComponent;
  let fixture: ComponentFixture<DuctSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuctSelectorComponent]
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
