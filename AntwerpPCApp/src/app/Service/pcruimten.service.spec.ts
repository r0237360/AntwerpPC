import { TestBed } from '@angular/core/testing';

import { PcruimtenService } from './pcruimten.service';

describe('PcruimtenService', () => {
  let service: PcruimtenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcruimtenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
