import { Component, OnInit} from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: Cart[] = []; 
  private cartProduct: any;
  cartAmount: Number;
  

  constructor(
    public nav: HeaderServiceService,
    private  _CartService: CartService
  ) {
    _CartService
    .getCart()
    .subscribe((cart) => {
      if(cart !== null){
        if(cart[1].ecustomer_id == 1){
          this.cartAmount = cart[0].cart_amount;
        }
      // console.log(cart[2].cart_amount)
      }
  
    }, (error) => {
      console.log(error);
    })
  }

  ngOnInit() {
  }



}
