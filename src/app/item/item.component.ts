import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { ProductService } from '../service/product.service';
import { Products } from '../products';
import { CategoryService } from '../service/category.service';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers:[NgbPopoverConfig]
})
export class ItemComponent implements OnInit {
  // @Input() cartItemAmount;
  @Output() cartItemAmount:EventEmitter<any> = new EventEmitter<any>();
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

  constructor(
    private _productService: ProductService,
    public nav: HeaderServiceService,
    private _categoryService: CategoryService,
    private route: ActivatedRoute,
    config: NgbPopoverConfig

  ) {
    //Popover
    config.container = 'body';
    config.placement = 'bottom';
    config.triggers = 'hover';

    _productService
      .getProducts().switchMap(product => {

       // console.log(product);
        this.product = product;
        if(this.product.length>0){
          this.showLoader = false
        }
        return route.queryParamMap;
    
      })
      .subscribe(params => {
        this.categoryR = params.get('category');
        this.categoryName = params.get('name');
        if(this.categoryR === null){
          this.filteredProducts = (this.category) ?
          this.product :
          this.product.filter(p => p.category_id === Number(this.categoryR));

          this.categoryName = 'All Categories';
          
        }
        else{
          this.filteredProducts = (this.category) ?
          this.product.filter(p => p.category_id === Number(this.categoryR)) :
          this.product;
        }
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
  }

  public addItem(Product,index){
    index++;
      if(index && Product != null){
        // console.log(index,itemProduct);
        this.itemCount++;
        this.itemProduct = Product;
        this.itemIndex = index;
        console.log(this.itemCount);
        // this.cartItemAmount.emit('this.itemCount');
        // console.log(this.cartItemAmount);
      }else{
        alert("No result");
      }
  }


}
