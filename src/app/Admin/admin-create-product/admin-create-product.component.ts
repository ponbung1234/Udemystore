import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.scss']
})
export class AdminCreateProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  save(product) { 
    console.log(product);
    // if (this.id) this.productService.update(this.id, product);
    // else this.productService.create(product);
    
    // this.router.navigate(['/admin/products']);
  }

}
