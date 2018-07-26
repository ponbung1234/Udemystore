import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { log } from 'util';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
  public cartID:number;
  cart: Cart[] = [];
  cartItem: Cart[]= [];
  userStatus: boolean;
  showLoader = true;
  noCart: boolean = false;
  constructor(
    public nav: HeaderServiceService,
    private _CartService: CartService,
    private router: Router,
    private cookieService: CookieService
  ) { 
    let sum = 0;
    let vat = 0.07;
    
    _CartService
    .getCart()
    .subscribe((cart) => {
     
      this.cartItem = cart;
      // console.log(this.cartItem);
      if(this.cartItem.length > 0 ){
        this.showLoader = false;
      }

      if(cart !== null ){
        this.lastIndex = cart;
        // console.log(this.lastIndex);
        for( let i = 0 ; i < cart.length ; i++){ 
          
          this.cartID=cart[i].cart_id;
          this.cartAmout = cart[i].cart_amount;
          this.cartNum += 1;
          sum += cart[i].price*this.cartAmout;
          this.cartPrice = sum; 
          this.cartTotalPrice = (sum*vat)+sum;
        }
        this.cartNum--;
        //console.log(this.cartNum)
        //console.log(this.cartID);
      }else{
        console.log("No data")
      }

    }, (error) => {
      this.showLoader = false;
      this.noCart = false;
      // console.log(error);
    })
   
  }

  ngOnInit() {
    this.nav.show();
    this.checkoutFlag = true;   
    this._CartService.cast.subscribe(cartNum=> this.cartNumber = cartNum);
    this.userStatus = this.cookieService.check('userName');
    if(!this.userStatus){
      this.showLoader = false;
    }
   
  }

  submit(paymentType:String){
    console.log("payment");
    console.log(this.cartID);
    this._CartService.checkOut(this.cartTotalPrice + "," + paymentType + "," +this.cartID).subscribe((formInput) => {
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
