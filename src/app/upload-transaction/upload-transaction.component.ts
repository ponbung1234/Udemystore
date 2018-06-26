import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';

@Component({
  selector: 'app-upload-transaction',
  templateUrl: './upload-transaction.component.html',
  styleUrls: ['./upload-transaction.component.css']
})
export class UploadTransactionComponent implements OnInit {

  constructor(public nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

}
