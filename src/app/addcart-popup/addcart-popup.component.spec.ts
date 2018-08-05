import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartPopupComponent } from './addcart-popup.component';

describe('AddcartPopupComponent', () => {
  let component: AddcartPopupComponent;
  let fixture: ComponentFixture<AddcartPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcartPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
