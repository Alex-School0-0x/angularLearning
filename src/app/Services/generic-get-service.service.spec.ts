import { TestBed } from '@angular/core/testing';

import { GenericGetServiceService } from './generic-get-service.service';

describe('GenericGetServiceService', () => {
  let service: GenericGetServiceService<{ id:number, name:string }>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericGetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
