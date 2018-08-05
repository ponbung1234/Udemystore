import { Component, OnInit } from '@angular/core';
declare function require(path: string);

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  imageSrc1 = require('../images/visa.jpg');
  imageSrc2 = require('../images/mastercard.jpg');
  imageSrc3 = require('../images/header-bg.jpg');
  constructor() { }

  ngOnInit() {
  }

}
