import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public nav: HeaderServiceService ) {
      }

  ngOnInit() {
  }

}
