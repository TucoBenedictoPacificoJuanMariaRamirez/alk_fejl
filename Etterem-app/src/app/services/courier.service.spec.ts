import { TestBed } from '@angular/core/testing';

import { CourierService } from './courier.service';

describe('CourierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourierService = TestBed.get(CourierService);
    expect(service).toBeTruthy();
  });
});
