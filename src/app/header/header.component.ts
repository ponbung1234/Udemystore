import { Component, OnInit, Input } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart';
import { ItemComponent } from '../item/item.component';
import { ProductService } from '../service/product.service';
import { Products } from '../products';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


const productName = [];


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ItemComponent]
})
export class HeaderComponent implements OnInit {
  // Search
  public model: any;

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : productName['name'].filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );


  // ->>>>>>>>>>>>>>>>>>>>
  cart: Cart[] = [];
  itemAllOfUser = 0;
  public itemAllOfUser2: number;
  cartNumber: number;
  productList: Products[] = [];
  public searchName: string;
  public searchID: number;
  productList_name: Products[] = [];
  productList_id: Products[] = [];

  constructor(
    public nav: HeaderServiceService,
    private _CartService: CartService,
    private _itemComponent: ItemComponent,
    private _productService: ProductService,
    private router: Router
  ) {
    // this.displayNumber = this._itemComponent.cartNumber;



  }

  ngOnInit() {
    this._productService.getProducts().subscribe((product) => {
      //console.log(product);
      this.productList = product;
      for (let i = 0; i < product.length; i++) {
        this.productList_name.push(product[i].product_name);
        this.productList_id.push(product[i].product_id);
      }
      productName['name'] = this.productList_name;
      productName['id'] = this.productList_id;

      console.log(productName);
      console.log(this.productList);
    }, (error) => {
      console.log(error);
    })

    this._CartService
      .getCart()
      .subscribe((cart) => {
        if (cart !== null) {
          // console.log(cart.length);
          for (let i = 0; i < cart.length; i++) {
            this.itemAllOfUser += cart[i].cart_amount;
          }
        }

        this.itemAllOfUser2 = this._CartService.setCartNum(this.itemAllOfUser);
        console.log(this.itemAllOfUser2);
      }, (error) => {
        console.log(error);
      })

    this._CartService.cast.subscribe(cartNum => this.cartNumber = cartNum);


  }

  save(product) {
    console.log(product.searchName);
    this.searchName = product.searchName;
    this._productService.getProducts().subscribe((product) => {
      this.productList = product;
      for (let i = 0; i < product.length; i++) {
        // console.log("product name: "+product[i].product_name);
        // console.log("search name: "+this.searchName);
        if (product[i].product_name === this.searchName) {
          this.searchID = product[i].product_id;
        }

      }
      console.log(this.searchID);
      this.model = null;
      this.router.navigate(['./detailpage'], { queryParams: { productID: this.searchID } });
    }, (error) => {
      console.log(error);
    })
  }
}
