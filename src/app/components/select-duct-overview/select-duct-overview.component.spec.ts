import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDuctOverviewComponent } from './select-duct-overview.component';

describe('SelectDuctOverviewComponent', () => {
  let component: SelectDuctOverviewComponent;
  let fixture: ComponentFixture<SelectDuctOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDuctOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDuctOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
