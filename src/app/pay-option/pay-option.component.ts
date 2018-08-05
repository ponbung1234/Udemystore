import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { Router } from "@angular/router";
import { SuccessComponent } from './../success/success.component';

@Component({
  selector: 'app-pay-option',
  templateUrl: './pay-option.component.html',
  styleUrls: ['./pay-option.component.css'],
  providers:[CartComponent, SuccessComponent]
})
export class PayOptionComponent implements OnInit {
  successAlert: boolean =false;
  constructor(
    public modalService: NgbModal,
    private cartComponent: CartComponent,
    private success: SuccessComponent,

    private router: Router
  ) { }

  ngOnInit() {
  }
  public open(content) {
    this.modalService.open(content);
  }
  callSubmit(paymentType:String){
    // console.log(paymentType);
    this.successAlert = true;
    // this.modalService.open(content, { centered: true });
    // console.log(contents);
    
    // this.success.openPopup(contents);
    // window.location.reload();
    this.router.navigate(['/success']);
    this.cartComponent.submit(paymentType);
    
  }


}
