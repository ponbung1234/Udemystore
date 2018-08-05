import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Products } from '../../products';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  product: Products[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {
    _productService.getProducts().subscribe((product) => {
      // console.log(category);
       this.product = product;
  
     }, (error) => {
       console.log(error);
     })
         
   }

  ngOnInit() {
  }



}
