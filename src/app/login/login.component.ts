import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: string;
  // @Input('loginValue') loginValue;

  constructor(
    private modalService: NgbModal,
    private _loginService: LoginService
  ) {}
  
  ngOnInit(){
    // console.log();
  }

  openVerticallyCentered(content) {
    console.log(content);
    this.modalService.open(content, { centered: true });
  }
// get value from input 
  loginData(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#usrname').value;
    const password = target.querySelector('#psw').value;
    // call login service
    //this._loginService.login(username + password);


    console.log(username,password);
  }
}
