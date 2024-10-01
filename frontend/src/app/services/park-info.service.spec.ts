import { TestBed } from '@angular/core/testing';

import { ParkInfoService } from './park-info.service';

describe('ParkInfoService', () => {
  let service: ParkInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
