import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
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
  count = 0;
  numberItem: number;
  cartNumber: number;
  checkoutFlag: boolean;

  cart: Cart[] = [];
  cartItem: Cart[]= [];
  constructor(
    public nav: HeaderServiceService,
    private _CartService: CartService,
    private router: Router
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
    this.checkoutFlag = true;   
    this._CartService.cast.subscribe(cartNum=> this.cartNumber = cartNum);
   
  }

  submit(paymentType:number){
    this._CartService.checkOut(this.cartEcustomerID + "," + this.cartTotalPrice + "," + paymentType).subscribe((formInput) => {
      // console.log(formInput);
     
    }, (error) => {
      console.log(error);
    });
  }

  addItemDet(productID: number, numberItem: number,carts, amount) {
    this.checkoutFlag = false;
    carts.cart_amount = amount + 1;
    this._CartService.updateCartNum(productID + "," + numberItem, numberItem).subscribe((productID) => {
      console.log(productID);

    }, (error) => {
      console.log(error);
    });
  }
  removeItem(productID: number, numberItem: number,carts, amount){
    this.checkoutFlag = false;
    carts.cart_amount = amount - 1;
    this._CartService.removeCartNum(productID + "," + numberItem, numberItem).subscribe((productID) => {
      console.log(productID);

    }, (error) => {
      console.log(error);
    });
  }
  deleteItem(productID: number){
    
    this._CartService.deleteProductfromCart(productID).subscribe((productID) => {
      console.log(productID);

    }, (error) => {
      console.log(error);
    });
    window.location.reload();
  }

  updatePrice(){
    window.location.reload();
    

  }

}
