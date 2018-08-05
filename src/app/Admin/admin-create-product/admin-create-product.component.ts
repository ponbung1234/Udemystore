import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.scss']
})
export class AdminCreateProductComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.queryParams.subscribe(params => {
      
      let id = params['productId'];
      //console.log(id);
      
    });

   }

  ngOnInit() {
  }
  save(product) { 
    //console.log(product);
    // if (this.id) this.productService.update(this.id, product);
    // else this.productService.create(product);
    
    // this.router.navigate(['/admin/products']);
  }

}
