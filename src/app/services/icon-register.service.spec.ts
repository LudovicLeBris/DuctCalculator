import { TestBed } from '@angular/core/testing';

import { IconRegisterService } from './icon-register.service';
import { MatIconRegistry } from '@angular/material/icon';

describe('IconRegisterService', () => {
  let service: IconRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#importIcon should return a MatIconRegistery object', () => {
    expect(service.importIcon('apd')).toBeInstanceOf(MatIconRegistry);
  });
});
