import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HeaderServiceService } from './../service/header-service.service';



@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal,public nav: HeaderServiceService) { }

  ngOnInit() {
    this.nav.show();
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
