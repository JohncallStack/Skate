import { TestBed } from '@angular/core/testing';

import { ImageKitByHeightService } from './image-kit-by-height.service';

describe('ImageKitByHeightService', () => {
  let service: ImageKitByHeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageKitByHeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
