import { TestBed } from '@angular/core/testing';

import { AirflowCalculationService } from './airflow-calculation.service';
import { Flowspeed } from '../models/airflow/flowspeed.model';
import { Section } from '../models/duct/section.model';
import { Flowrate } from '../models/airflow/flowrate.model';

describe('AirflowCalculationService', () => {
  let service: AirflowCalculationService;
  const mockedFlowrate = new Flowrate;
  const mockedFlowspeed = new Flowspeed;
  const mockedSection = new Section;
  mockedFlowrate.setValue(1963);
  mockedFlowspeed.setValue(7);
  mockedSection.setValue(0.0779);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirflowCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#flowspeed should return the right calculation with 7 flowspeed and 0.0779 section', () => {
    expect(AirflowCalculationService.flowrate(mockedFlowspeed, mockedSection)).toBeCloseTo(1963.08, 2);
  });

  it('#flowspeed should return the right calculation whit 1963 flowrate and 0.0779 section', () => {
    expect(AirflowCalculationService.flowspeed(mockedFlowrate, mockedSection)).toBeCloseTo(7,2);
  });
});
