import { TestBed, inject } from '@angular/core/testing';

import { StationService } from './station.service';

describe('StationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationService]
    });
  });

  it('should ...', inject([StationService], (service: StationService) => {
    expect(service).toBeTruthy();
  }));
});
