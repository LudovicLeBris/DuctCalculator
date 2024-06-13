import { TestBed } from '@angular/core/testing';

import { CircularDuctCalculationService } from './circular-duct-calculation.service';
import { Diameter } from '../models/duct/diameter.model';
import { Section } from '../models/duct/section.model';

describe('CircularDuctCalculationService', () => {
  let service: CircularDuctCalculationService;
  const mockedDiameter = new Diameter;
  const mockedSection = new Section;
  mockedDiameter.setValue(315);
  mockedSection.setValue(0.0779);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircularDuctCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#equivalentDiameter should return the right calculation for a 315 diameter', () => {
    expect(service.equivalentDiameter(mockedDiameter)).toBe(315);
  });

  it('#sectionByDimension should return the right calculation for a 315 diameter', () => {
    expect(service.sectionByDimensions(mockedDiameter)).toBeCloseTo(0.0779, 4);
  });

  it('#dimensionsBySection should return the right calculation for a 0.0779 section', () => {
    expect(service.dimensionsBySection(mockedSection)).toBeCloseTo(314.937,3);
  });
});
