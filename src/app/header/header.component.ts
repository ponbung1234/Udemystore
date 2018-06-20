import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginComponent]
})
export class HeaderComponent implements OnInit {

  constructor(private comp: LoginComponent) {
      }

  ngOnInit() {
  }
  callMethod(content){
    //this.loginComponent.open(content);
    //this.massageEvent.emit(content)
    this.comp.openVerticallyCentered(content);
  }
  
}
