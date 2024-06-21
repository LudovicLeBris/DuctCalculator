import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdSelectorComponent } from './apd-selector.component';

describe('ApdSelectorComponent', () => {
  let component: ApdSelectorComponent;
  let fixture: ComponentFixture<ApdSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApdSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
