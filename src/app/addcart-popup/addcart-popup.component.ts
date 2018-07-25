import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addcart-popup',
  templateUrl: './addcart-popup.component.html',
  styleUrls: ['./addcart-popup.component.css']
})
export class AddcartPopupComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    console.log(content);
    this.modalService.open(content, { centered: true });
  }


}
