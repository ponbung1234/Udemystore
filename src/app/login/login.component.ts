import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}
  
  ngOnInit(){
    //console.log(this.content);
  }

  openVerticallyCentered(content) {
    console.log(content);
    this.modalService.open(content, { centered: true });
  }
}
