import { TestBed } from '@angular/core/testing';

import { GenericFullServiceService } from './generic-full-service.service';

describe('GenericFullServiceService', () => {
  let service: GenericFullServiceService<{ id:number, name:string }>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericFullServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
