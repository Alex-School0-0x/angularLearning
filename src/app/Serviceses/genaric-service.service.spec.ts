import { TestBed } from '@angular/core/testing';

import { GenaricServiceService } from './genaric-service.service';

describe('GenaricServiceService', () => {
  let service: GenaricServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenaricServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
