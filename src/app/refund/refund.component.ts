import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  closeResult: string;

  constructor(public nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

}
