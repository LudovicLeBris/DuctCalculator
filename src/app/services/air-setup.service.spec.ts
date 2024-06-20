import { TestBed } from '@angular/core/testing';

import { AirSetupService } from './air-setup.service';

describe('AirSetupService', () => {
  let service: AirSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
