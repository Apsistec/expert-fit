import { TestBed } from '@angular/core/testing';

import { AuthProcessService } from './auth-process.service';

describe('AuthProcessService', () => {
  let service: AuthProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
