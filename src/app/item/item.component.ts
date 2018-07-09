import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { ProductService } from '../service/product.service';
import { Products } from '../products';
import { CategoryService } from '../service/category.service';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers:[NgbPopoverConfig]
})
export class ItemComponent implements OnInit {
  product: Products[] = [];
  filteredProducts: Products[] = [];
  category: Category[] = [];
  show: boolean = true;
  i: number = 0;
  categoryR: string = null;
  categoryName: string;

  constructor(
    private _productService: ProductService,
    public nav: HeaderServiceService,
    private _categoryService: CategoryService,
    private route: ActivatedRoute,
    config: NgbPopoverConfig

  ) {
    //popovers
      config.placement = 'bottom';
      config.triggers = 'hover';

    _productService
      .getProducts().switchMap(product => {
        console.log(product);
        this.product = product;
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
      // console.log(error);
    })


  }

  ngOnInit() {
    this.nav.show();

  }


}
