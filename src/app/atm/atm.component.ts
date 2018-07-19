import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../service/header-service.service';
import { PayOptionComponent } from '../pay-option/pay-option.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cart } from '../cart';
import { CartService } from '../service/cart.service';

declare function require(path: string);

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  imageSrc = require('../images/atm.png');
  payOption: PayOptionComponent;
  cartProName: string = '';
  cartProDescript: string = '';
  cartAmout: number = 0;
  cartPrice: number = 0;
  cartTotalPrice: number = 0;
  lastIndex = 0 ;
  cartNum = 0;


  cart: Cart[] = [];
  cartItem : any;
  constructor(
    public nav: HeaderServiceService,
    private _CartService: CartService,
  ) { 
    let sum = 0;
    let vat = 0.07;
    
    _CartService
    .getCart()
    .subscribe((cart) => {
      if(cart !== null ){
        this.lastIndex = cart;
        for( let i = 0 ; i < cart.length ; i++){ 
          if(cart[i].ecustomer_id == 1){
            this.cartNum += 1;
          this.cartAmout = cart[i].cart_amount;
          this.cartItem = cart;
          this.cartProName = cart[i].product_name;
          this.cartProDescript = cart[i].product_description;
          sum += cart[i].price*this.cartAmout;
          }
          this.cartPrice = sum; 
          this.cartTotalPrice = (sum*vat)+sum;
        }    
        this.cartNum--;
      }else{
        console.log("No data")
      }

    }, (error) => {
      console.log(error);
    })
  }

  ngOnInit() {
    this.nav.show();
  }


}
