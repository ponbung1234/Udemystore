import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';

@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.css']
})
export class CoverpageComponent implements OnInit {

  constructor(public nav: HeaderServiceService) { }
  ngOnInit() {
    this.nav.hide();
  }
}
