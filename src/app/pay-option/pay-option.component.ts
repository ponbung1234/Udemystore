import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pay-option',
  templateUrl: './pay-option.component.html',
  styleUrls: ['./pay-option.component.css'],
  providers:[CartComponent]
})
export class PayOptionComponent implements OnInit {
  successAlert: boolean =false;
  constructor(
    public modalService: NgbModal,
    private cartComponent: CartComponent,

    private router: Router
  ) { }

  ngOnInit() {
  }
  public open(content) {
    this.modalService.open(content);
  }
  callSubmit(paymentType:String,content){
    // console.log(paymentType);
    this.successAlert = true;
    this.modalService.open(content, { centered: true });
    window.location.reload();
    // this.router.navigate(['/']);
    // this.cartComponent.submit(paymentType);
    
  }


}
