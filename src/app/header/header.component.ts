import { Component, OnInit, Input} from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ItemComponent]
})
export class HeaderComponent implements OnInit {
  cart: Cart[] = []; 
  itemAllOfUser = 0;
  cartNumber: number;
  

  constructor(
    public nav: HeaderServiceService,
    private  _CartService: CartService,
    private _itemComponent: ItemComponent
  ) {
    // this.displayNumber = this._itemComponent.cartNumber;

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
      _CartService.setCartNum(this.itemAllOfUser);
    }, (error) => {
      console.log(error);
    })
    
    
    _CartService.cast.subscribe(cartNum=> this.cartNumber = cartNum);
  }

  ngOnInit() {
   
  }
  // public setDataAmount(data){
  //   this.itemAmount = data;
  //   console.log(data);
  // }
}
