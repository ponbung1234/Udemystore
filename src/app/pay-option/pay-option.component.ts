import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pay-option',
  templateUrl: './pay-option.component.html',
  styleUrls: ['./pay-option.component.css']
})
export class PayOptionComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }


}
