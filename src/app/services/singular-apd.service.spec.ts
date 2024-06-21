import { TestBed } from '@angular/core/testing';

import { SingularApdService } from './singular-apd.service';
import { Air } from '../models/air/air.model';
import { Airflow } from '../models/airflow/airflow.model';
import { Elbow90 } from '../models/singularity/elbow-90.model';
import { Singularities } from '../models/singularity/singularities.model';
import { LongReducer } from '../models/singularity/long-reducer.model';

describe('SingularApdService', () => {
  let service: SingularApdService;
  const mockedAir = new Air();
  const mockedAirflow = new Airflow();
  const mocked90Elbow = new Elbow90('circular');
  const mockedLongReducer = new LongReducer('circular');
  const mockedSingularities = new Singularities();
  mockedAirflow.flowrate.setValue(2000);
  mockedAirflow.flowspeed.setValue(7);
  mocked90Elbow.setQuantity(1);
  mockedLongReducer.setQuantity(1);
  mockedSingularities.addSingularity(mocked90Elbow);
  mockedSingularities.addSingularity(mockedLongReducer);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingularApdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#singularApd should return the right calculation with 7 flowspeed and 1 90 elbow ', () => {
    expect(service.singularApd(mocked90Elbow, mockedAir, mockedAirflow)).toBeCloseTo(11.82, 2);
  });

  it('#singularApdByQuantity should return the right calculation with 7 flowspeed and 3 90 elbow', () => {
    mocked90Elbow.setQuantity(3);
    expect(service.singularApdByQuantity(mocked90Elbow, mockedAir, mockedAirflow)).toBeCloseTo(35.45, 2);
  });

  it('#totalSingularApd should return the right calculation with 7 flowspeed, 3 90 elbows and 1 long reducer',
    () => {
      mocked90Elbow.setQuantity(3);
      expect(service.totalSingularApd(mockedSingularities, mockedAir, mockedAirflow)).toBeCloseTo(52.88, 2);
    }
  );
});
