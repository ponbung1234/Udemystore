import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../service/header-service.service';
import { PayOptionComponent } from '../pay-option/pay-option.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare function require(path: string);

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  imageSrc = require('../images/atm.png');
  payOption: PayOptionComponent;

  constructor(public nav: HeaderServiceService,public modalService: NgbModal) { }

  ngOnInit() {
    this.nav.show();
  }


}
