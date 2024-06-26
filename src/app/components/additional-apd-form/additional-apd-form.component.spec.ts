import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalApdFormComponent } from './additional-apd-form.component';

describe('AdditionalApdFormComponent', () => {
  let component: AdditionalApdFormComponent;
  let fixture: ComponentFixture<AdditionalApdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalApdFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalApdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
