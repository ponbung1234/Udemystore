import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Products } from '../products';
import { HeaderServiceService } from '../service/header-service.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  getproductID;
  productItem: Products[] = [];
  productFromSearch;

  constructor(
    public nav: HeaderServiceService,
    private _product: ProductService
  ) { 
    _product
    .getProducts()
    .subscribe((productItem) => {
      productItem=productItem;
      if(productItem != null){
        for(let i = 0 ; i <= productItem.length ; i++ ){
          this.getproductID = productItem[i].product_id;
          console.log(this.getproductID)
          // if(this.productFromSearch == productItem[i].product_id){
          //   this.productFromSearch = productItem;
          //   console.log(productItem[i].url);
          // }
        }
      }else {
        alert("no data");
      }
    })
  }

  ngOnInit() {
    this.nav.show();
  }

}
