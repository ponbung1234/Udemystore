import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTransactionComponent } from './upload-transaction.component';

describe('UploadTransactionComponent', () => {
  let component: UploadTransactionComponent;
  let fixture: ComponentFixture<UploadTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
