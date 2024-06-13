import { TestBed } from '@angular/core/testing';
import { GeneralDuctCalculationService } from './general-duct-calculation.service';
import { Flowrate } from '../models/airflow/flowrate.model';
import { Flowspeed } from '../models/airflow/flowspeed.model';

describe('GeneralDuctCalculationService', () => {
  let service: GeneralDuctCalculationService;
  const mockedFlowrate = new Flowrate;
  const mockedFlowspeed = new Flowspeed;
  mockedFlowrate.setValue(2000);
  mockedFlowspeed.setValue(7);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralDuctCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#closerNormalizedDiameter should return the next normalized diameter', () => {
    expect(service.closerNormalizedDiameter(308.12)).toBe(315);
  });

  it('#sectionByFlorate should retrun the right calculation for a 2000 flowrate and a 7 flowspeed', () => {
    expect(service.sectionByFlowrate(mockedFlowrate, mockedFlowspeed)).toBeCloseTo(0.0794, 4);
  });
});
