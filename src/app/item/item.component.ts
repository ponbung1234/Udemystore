import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public nav: HeaderServiceService) { }
  ngOnInit() {
    this.nav.show();
  }

}
