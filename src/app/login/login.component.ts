import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './../service/login.service';
import {Router} from '@angular/router';
import { AuthService } from './../service/auth.service';
import { User } from './../user';


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


  constructor(
    private modalService: NgbModal,
    private _loginService: LoginService,
    private router: Router,
    private authService: AuthService
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

    // this.authService.attemptAuth(this.username, this.password).subscribe(
    //   data => {
    //     this.token.saveToken(data.token);
    //     this.router.navigate(['user']);
    //   }
    // );
    this._loginService.login(username,password)
    // .subscribe((login) => {
      // var payload = login.json();
      // var headers = login.headers;
      // var response = login;

      // console.log(login);
      // console.log(payload);
      // console.log(headers);     
    , (error) => {
      console.log(error);
    };

    // .subscribe((res) => {
    //   var payload = res.json();
    //   var headers = res.headers;
    //   console.log(payload);
    //   console.log(headers);
    // });
  }
}
