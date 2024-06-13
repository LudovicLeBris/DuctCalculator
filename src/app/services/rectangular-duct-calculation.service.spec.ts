import { TestBed } from '@angular/core/testing';
import { RectangularDuctCalculationService } from './rectangular-duct-calculation.service';
import { Width } from '../models/duct/width.model';
import { Height } from '../models/duct/height.model';
import { Section } from '../models/duct/section.model';
import { Ratio } from '../models/duct/ratio.model';

describe('DuctCalculationService', () => {
  let service: RectangularDuctCalculationService;
  const mockedWidth = new Width;
  const mockedHeight = new Height;
  const mockedSection = new Section;
  const mockedRatio = new Ratio;
  mockedWidth.setValue(500);
  mockedHeight.setValue(250);
  mockedSection.setValue(0.1163);
  mockedRatio.setValue(2);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RectangularDuctCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#equivalentDiameter should return the right calculation for a 500 width and a 250 height dimensions', () => {
    expect(service.equivalentDiameter(mockedWidth, mockedHeight)).toBeCloseTo(384.7904, 4);
  });

  it('#ratio should return the right calculation for a 500 width and a 250 height dimensions', () => {
    expect(service.ratio(mockedWidth, mockedHeight)).toBe(2);
  });

  it('#ratio should return the right calculation for a 200 width and a 600 height dimensions');

  it('#sideSize should return the right calculation for a 0.1163 section and a 250 known side dimension', () => {
    expect(service.sideSize(mockedSection, 250)).toBeCloseTo(465, 0)
  });

  it('#sectionByDimensions should return the right calculation for a 500 width and a 250 height dimensions', () => {
    expect(service.sectionByDimensions(mockedWidth, mockedHeight)).toBeCloseTo(0.1163, 4);
  });

  it('#dimensionsByRatio should return the right calculation for a 0.1163 section and a 2 ratio', () => {
    expect(service.dimensionsByRatio(mockedSection, mockedRatio)[0]).toBeCloseTo(482.286, 3);
    expect(service.dimensionsByRatio(mockedSection, mockedRatio)[1]).toBeCloseTo(241.143, 3);
  });
});
