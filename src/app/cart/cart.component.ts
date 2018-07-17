import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { log } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProName: string = '';
  cartProDescript: string = '';
  cartAmout: number = 0;
  cartPrice: number = 0;
  cartTotalPrice: number = 0;
  cartEcustomerID = 0;
  lastIndex = 0 ;
  hr = 0;
  cartNum = 0;

  cart: Cart[] = [];
  cartItem: Cart[]= [];
  constructor(
    public nav: HeaderServiceService,
    private _CartService: CartService,
  ) { 
    let sum = 0;
    let vat = 0.07;
    
    _CartService
    .getCart()
    .subscribe((cart) => {
      this.cartItem = cart;
      // console.log(this.cartItem);
      if(cart !== null ){
        this.lastIndex = cart;
        // console.log(this.lastIndex);
        for( let i = 0 ; i < cart.length ; i++){ 
          if(cart[i].ecustomer_id == 1){
          this.cartAmout = cart[i].cart_amount;
          this.cartNum += 1;
          // this.cartItem = cart;
          // this.cartProName = cart[i].product_name;
          // this.cartProDescript = cart[i].product_description;
          // this.cartEcustomerID = cart[i].ecustomer_id;
          sum += cart[i].price*this.cartAmout;
          }
          this.cartPrice = sum; 
          this.cartTotalPrice = (sum*vat)+sum;
          
        }
        this.cartNum--;
        //console.log(this.cartNum)
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

  submit(paymentType:number){
    this._CartService.checkOut(this.cartEcustomerID + "," + this.cartTotalPrice + "," + paymentType).subscribe((formInput) => {
      // console.log(formInput);
     
    }, (error) => {
      console.log(error);
    });
  }

}
