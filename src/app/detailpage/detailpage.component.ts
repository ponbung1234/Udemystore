import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../products';
import { HeaderServiceService } from '../service/header-service.service';
import { CartService } from '../service/cart.service'

@Injectable()
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
  providers:[CartService]
})
export class DetailpageComponent implements OnInit {
  @Output() cartItemAmount: EventEmitter <any> = new EventEmitter<any>();
  productItem: Products[] = [];
  productID = 0;
  productName = '';
  productDes = '';
  productPrice = 0;
  productIMG = '';
  numberItem = 1;
  count = 0;
  cartNumber: number;
  productSearchID = 12;


  constructor(
    public nav: HeaderServiceService,
    private _product: ProductService,
    private _cartService: CartService,
    
  ) { 
    _product
    .getProducts()
    .subscribe((productItem) => {
      
      // console.log(productItem);
      if(productItem != null){
        for(let i = 0 ; i < productItem.length ; i++ ){
          if(this.productSearchID == productItem[i].product_id){
            // console.log(productItem[i])
            this.productID = productItem[i].product_id;
            this.productName = productItem[i].product_name;
            this.productDes = productItem[i].product_description;
            this.productPrice = productItem[i].price;
            this.productIMG = productItem[i].url;
          }
        }
        // this.productItem = productItem[3].product_id;
      }else {
        alert("no data");
      }
    })
  }
  
  ngOnInit() {
    this.nav.show();
    this._cartService.cast.subscribe(cartNum => this.cartNumber = cartNum);
    console.log("detail page num: "+this.cartNumber);
  }
  public addItemDet(product: number, numberItem: number){
    console.log("details:" + product)
    this._cartService.updateCartNum(product).subscribe((product) => {
    // console.log("details in :" + product)
      
    }, (error) => {
      console.log(error);
    });
  }

  plus(){
    this.count++;
    this.numberItem = this.count;
  }
  minus(){
    if(this.count > 1 ){
      this.count--;
      this.numberItem = this.count;
    }
  }
}
