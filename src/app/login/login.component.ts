import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './../service/login.service';
import {Router} from '@angular/router';
import { AuthService } from './../service/auth.service';
import { User } from './../user';
import { Token } from '../../../node_modules/@angular/compiler';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: string;
  // @Input('loginValue') loginValue;
  username: string;
  password: string;
  // user: User[] = [];
  alert: boolean = false;
  successAlert: boolean = false;
  loginStatus: boolean;

  constructor(
    private modalService: NgbModal,
    private _loginService: LoginService,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService,

  ) {}
  
  ngOnInit(){
    // console.log();
    this.loginStatus = this.cookieService.check('userName');
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

    console.log(username,password);

    this._loginService.login(username,password).subscribe((Token)=>{
      console.log(Token);
      this.cookieService.set("userToken", Token);
      this.cookieService.set("userName",username);
      this.successAlert = true;
      this.alert = false;
      window.location.reload();
      
      
    } ,(error) => {
      console.log("sssssssss");
      this.alert = true;
      console.log(error);
    });
    


  }
}
