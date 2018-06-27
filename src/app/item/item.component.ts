import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import {ProductService} from '../service/product.service';
import { Products } from '../products';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  private product:Products[];
  show: boolean = true;
  i: number =0;
  constructor(private _productService:ProductService,public nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
    this._productService.getProducts().subscribe((product)=>{
      console.log(product);
      this.product=product;
    },(error)=>{
      console.log(error);
    })
  }


}
