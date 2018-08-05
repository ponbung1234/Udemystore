import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
declare function require(path: string);

@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.scss']
})
export class CoverpageComponent implements OnInit {
  imageSrc = require('../images/header-bg.jpg');
  constructor(public nav: HeaderServiceService) { }
  ngOnInit() {
    this.nav.hide();
  }
}
