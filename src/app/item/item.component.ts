import { forwardRef,Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { ProductService } from '../service/product.service';
import { Products } from '../products';
import { CategoryService } from '../service/category.service';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/switchMap';
import { CartService } from './../service/cart.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';



declare var jquery:any;
declare var $ :any;

@Injectable()
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [NgbPopoverConfig]
})
export class ItemComponent implements OnInit {
  // @Input() cartItemAmount;
  @Output() cartItemAmount: EventEmitter<any> = new EventEmitter<any>();
  product: Products[] = [];
  filteredProducts: Products[] = [];
  private category: Category[] = [];
  show: boolean = true;
  i: number = 0;
  categoryR: string = null;
  categoryName: string;
  showLoader = true;
  itemCount = 0;
  itemProduct;
  itemIndex;
  cartNumber: number;
  loginStatus: boolean;

  constructor(
    private _productService: ProductService,
    public nav: HeaderServiceService,
    private _categoryService: CategoryService,
    private route: ActivatedRoute,
    private config: NgbPopoverConfig,
    private _cartService: CartService,
    private modalService: NgbModal,
    private cookieService: CookieService

  ) {
    //Popover
    config.container = 'body';
    config.placement = 'bottom';
    config.triggers = 'hover';

    _productService
      .getProducts().switchMap(product => {
        this.product = product;
        if (this.product.length > 0) {
          this.showLoader = false
        }
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.categoryR = params.get('category');
        this.categoryName = params.get('name');
        if (this.categoryR === null) {
          this.filteredProducts = (this.category) ?
            this.product :
            this.product.filter(p => p.category_id === Number(this.categoryR));
          this.categoryName = 'All Categories';
        }
        else {
          this.filteredProducts = (this.category) ?
            this.product.filter(p => p.category_id === Number(this.categoryR)) :
            this.product;
        }
      });

    _categoryService.getProducts().subscribe((category) => {
      // console.log(category);
      this.category = category;
    }, (error) => {
      // console.log("login first");
    })

  }

  ngOnInit() {
    this.nav.show();
    const value: string = this.cookieService.get('userToken');
    //this.cookieService.deleteAll();
    //console.log(value);
    // this.cookieService.deleteAll();
    this.loginStatus = this.cookieService.check('userName');
    //console.log(this.loginStatus);
    
    this._cartService.cast.subscribe(cartNum=> this.cartNumber = cartNum);

  }

  public addItem(productID: number,content) {
    // this._cartService.updateCartNum(productID);
    this.modalService.open(content, { centered: true });
    this._cartService.updateCartNum(productID+","+1,1).subscribe((productID) => {
      //console.log(productID);
     
    }, (error) => {
      console.log(error);
    });
    
  }
  openVerticallyCentered(content) {
    
  }

}
