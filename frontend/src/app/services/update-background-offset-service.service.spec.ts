import { TestBed } from '@angular/core/testing';

import { UpdateBackgroundOffsetServiceService } from './update-background-offset-service.service';

describe('UpdateBackgroundOffsetServiceService', () => {
  let service: UpdateBackgroundOffsetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateBackgroundOffsetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
