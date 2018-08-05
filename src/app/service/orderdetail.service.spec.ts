import { TestBed, inject } from '@angular/core/testing';

import { OrderdetailService } from './orderdetail.service';

describe('OrderdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderdetailService]
    });
  });

  it('should be created', inject([OrderdetailService], (service: OrderdetailService) => {
    expect(service).toBeTruthy();
  }));
});
