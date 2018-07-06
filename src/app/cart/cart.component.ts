import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProName: string;
  cartProDescript: string;
  cart: Cart[] = [];
  cartItem : any;
  constructor(
    public nav: HeaderServiceService,
    private _CartService: CartService,
  ) { 
    _CartService
    .getCart()
    .subscribe((cart) => {
      if(cart !== null ){
        this.cartItem = cart;
        this.cartProName = cart[1].product_name;
        this.cartProDescript = cart[1].product_description;
        console.log(this.cartProDescript,this.cartProName);     
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
