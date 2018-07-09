import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import { Products } from '../products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  product:Products[];
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((product)=>{
      console.log(product);
      this.product=product;
    },(error)=>{
      console.log(error);
    })
  }

}
