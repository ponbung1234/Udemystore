import { TestBed, inject } from '@angular/core/testing';

import { AdminRefundService } from './admin-refund.service';

describe('AdminRefundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRefundService]
    });
  });

  it('should be created', inject([AdminRefundService], (service: AdminRefundService) => {
    expect(service).toBeTruthy();
  }));
});
