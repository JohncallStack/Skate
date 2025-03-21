import { TestBed } from '@angular/core/testing';

import { ImageKitService } from './image-kit.service';

describe('ImageKitService', () => {
  let service: ImageKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
