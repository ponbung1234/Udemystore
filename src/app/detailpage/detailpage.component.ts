import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../products';
import { HeaderServiceService } from '../service/header-service.service';
import { CartService } from '../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CategoryService } from '../service/category.service';
import { Category } from '../category';
import 'rxjs/add/operator/switchMap';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css'],
})
export class DetailpageComponent implements OnInit {
  @Output() cartItemAmount: EventEmitter<any> = new EventEmitter<any>();
  
  productItem: Products[] = [];
  relatedProduct: Products[] = [];
  private category: Category[] = [];
  productID: number;
  productName = '';
  productDes = '';
  productPrice = 0;
  productIMG = '';
  numberItem = 1;
  count = 0;
  cartNumber: number;
  sizeProduct = 0;
  categoryID: string;




  constructor(
    public nav: HeaderServiceService,
    private _product: ProductService,
    private _cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _categoryService: CategoryService,
    private cookieService: CookieService

  ) {

    //list product detail that match the productID
    _product
      .getProducts()
      .subscribe((productItem) => {
        this.activatedRoute.queryParams.subscribe(params => {
          this.productID = params['productID'];

          // console.log(this.productID);
          // console.log(productItem);
          if (productItem != null) {
            for (let i = 0; i < productItem.length; i++) {
              this.sizeProduct = productItem.length;
              //console.log(this.sizeProduct);
              if (this.productID == productItem[i].product_id) {
                // console.log(productItem[i])
                this.productID = productItem[i].product_id;
                this.productName = productItem[i].product_name;
                this.productDes = productItem[i].product_description;
                this.productPrice = productItem[i].price;
                this.productIMG = productItem[i].url;
              }
              // if(productItem[i].category_id == this.categoryID){
              //   this.relatedProduct = productItem[i];
              //   console.log(this.relatedProduct);
              // }
            }
            // this.productItem = productItem[3].product_id;
          } else {
            alert("no data");
          }


        });
      })


    //category filter
    _product
      .getProducts().switchMap(product => {
        this.productItem = product;
        return activatedRoute.queryParamMap;
      })
      .subscribe(params => {
        this.categoryID = params.get('categoryID');

        this.relatedProduct = (this.category) ?
          this.productItem.filter(p => p.category_id === Number(this.categoryID)) :
          this.productItem;
        //console.log(this.relatedProduct);

      });

    _categoryService.getProducts().subscribe((category) => {
      // console.log(category);
      this.category = category;
    }, (error) => {
      console.log(error);
    })

  }

  ngOnInit() {
    this.nav.show();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }
  addItemDet(productID: number, numberItem: number) {
    // console.log("details:" + productID);
    // console.log("numberItem:" + numberItem);
    this._cartService.updateCartNum(productID + "," + numberItem, numberItem).subscribe((productID) => {
      // console.log(productID);

    }, (error) => {
      console.log(error);
    });
  }

  plus() {
    this.count++;
    this.numberItem = this.count;
  }
  minus() {
    if (this.count > 1) {
      this.count--;
      this.numberItem = this.count;
    }
  }

  // carousel
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 1500,
    "infinite":true,
    "speed":600,
    
  };
  afterChange(e) {
    // console.log('afterChange');
  }
}
