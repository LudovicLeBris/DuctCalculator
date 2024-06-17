import { TestBed } from '@angular/core/testing';

import { LinearApdCalculationService } from './linear-apd-calculation.service';
import { Air } from '../models/air/air.model';
import { Airflow } from '../models/airflow/airflow.model';
import { CircularDuct, DuctFactory, RectangularDuct } from '../models/duct/duct.model';
import { Shape } from '../models/duct/shape.model';
import { CircularDuctCalculationService } from './circular-duct-calculation.service';
import { AirflowCalculationService } from './airflow-calculation.service';
import { inject } from '@angular/core';

describe('LinearApdCalculationService', () => {
  let service: LinearApdCalculationService;
  let circularDuctCalculationService: CircularDuctCalculationService = new CircularDuctCalculationService;
  let airflowCalculationService: AirflowCalculationService = new AirflowCalculationService;

  const mockedAir = new Air;

  const mockedShape = new Shape;
  mockedShape.setValue('circular');
  const mockedDuct = new CircularDuct(mockedShape);
  mockedDuct.diameter.setValue(315);
  mockedDuct.length.setValue(1);
  mockedDuct.equivalentDiameter = circularDuctCalculationService.equivalentDiameter(mockedDuct.diameter);
  mockedDuct.section.setValue(circularDuctCalculationService.sectionByDimensions(mockedDuct.diameter));

  const mockedAirFlow = new Airflow;
  mockedAirFlow.flowrate.setValue(2000);
  mockedAirFlow.flowspeed.setValue(airflowCalculationService.flowspeed(
    mockedAirFlow.flowrate, mockedDuct.section
  ));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinearApdCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getLinearApd should return the right calculation', () => {
    expect(service.getlinearApd(mockedAir, mockedDuct, mockedAirFlow)).toBeCloseTo(1.824, 3);
  });
});
