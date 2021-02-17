import { TestBed } from '@angular/core/testing';

import { FirebaseUploadService } from './firebase-upload.service';

describe('FirebaseUploadService', () => {
  let service: FirebaseUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
