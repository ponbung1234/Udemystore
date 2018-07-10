import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  lastIndex = 0 ;
  hr = 0;

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
        if(cart[1].ecustomer_id == 1){
        this.cartAmout = cart[1].cart_amount;
        this.cartItem = cart;
        this.cartProName = cart[1].product_name;
        this.cartProDescript = cart[1].product_description;

         for( let i = 0 ; i < cart.length ; i++){ 
           sum += cart[i].price;
          }
          this.cartPrice = sum; 
          this.cartTotalPrice = (sum*vat)+sum;
        }    
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
