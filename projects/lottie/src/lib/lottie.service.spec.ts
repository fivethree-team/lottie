import { TestBed } from '@angular/core/testing';

import { LottieService } from './lottie.service';

describe('LottieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LottieService = TestBed.get(LottieService);
    expect(service).toBeTruthy();
  });
});
