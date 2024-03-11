import { TestBed } from '@angular/core/testing';

import { VehicleDataServiceService } from './vehicle-data-service.service';

describe('VehicleDataServiceService', () => {
  let service: VehicleDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
