import { TestBed } from '@angular/core/testing';

import { CSCService } from './csc.service';

describe('CSCService', () => {
  let service: CSCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
