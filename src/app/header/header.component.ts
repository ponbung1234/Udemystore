import { Component, OnInit, Input} from '@angular/core';
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
  itemAllOfUser = 0;
  

  constructor(
    public nav: HeaderServiceService,
    private  _CartService: CartService
  ) {
    _CartService
    .getCart()
    .subscribe((cart) => {
      if(cart !== null){
        // console.log(cart.length);
        for(let i = 0 ; i < cart.length ; i++){
          // console.log(cart[i])
          if(cart[i].ecustomer_id == 1){
            // console.log(cart[i])
            this.itemAllOfUser += cart[i].cart_amount;
          }else{
            alert("no user");   
            break;
          }
        }
        // console.log(this.itemAllOfUser)
        // console.log(this.cartAmount);
      // console.log(cart[2].cart_amount)
      }
  
    }, (error) => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

  // public setDataAmount(data){
  //   this.itemAmount = data;
  //   console.log(data);
  // }
}
