import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(public nav: HeaderServiceService) { }


  ngOnInit() {
    this.nav.show();
  }

}
