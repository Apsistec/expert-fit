import { TestBed } from '@angular/core/testing';

import { BenefitsService } from './benefits.service';

describe('BenefitsService', () => {
  let service: BenefitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
