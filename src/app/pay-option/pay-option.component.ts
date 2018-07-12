import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-pay-option',
  templateUrl: './pay-option.component.html',
  styleUrls: ['./pay-option.component.css'],
  providers:[CartComponent]
})
export class PayOptionComponent implements OnInit {
  constructor(
    public modalService: NgbModal,
    private cartComponent: CartComponent
  ) { }

  ngOnInit() {
  }
  public open(content) {
    this.modalService.open(content);
  }
  callSubmit(paymentType:number){
    console.log(paymentType);
    this.cartComponent.submit(paymentType);
    
  }


}
