import { TestBed } from '@angular/core/testing';

import { PaidGuard } from './paid.guard';

describe('PaidGuard', () => {
  let guard: PaidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PaidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
