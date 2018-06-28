import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import {ProductService} from '../service/product.service';
import { Products } from '../products';
import { CategoryService } from '../service/category.service';
import { Category } from '../category';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  private product:Products[];
  private category:Category[];
  show: boolean = true;
  i: number =0;
  constructor(
    private _productService:ProductService,
    public nav: HeaderServiceService,
    private _categoryService:CategoryService
  ) { }

  ngOnInit() {
    this.nav.show();

    this._productService.getProducts().subscribe((product)=>{
      console.log(product);
      this.product=product;
    },(error)=>{
      console.log(error);
    })

    this._categoryService.getProducts().subscribe((category)=>{
      console.log(category);
      this.category=category;
    },(error)=>{
      console.log(error);
    })
  }


}
