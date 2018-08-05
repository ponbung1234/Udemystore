import { TestBed, inject } from '@angular/core/testing';

import { AdminHeaderService } from './admin-header.service';

describe('AdminHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminHeaderService]
    });
  });

  it('should be created', inject([AdminHeaderService], (service: AdminHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
