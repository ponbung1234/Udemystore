import { Component, OnInit } from '@angular/core';
import { AdminHeaderService } from './../../service/admin-header.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public nav: AdminHeaderService,) { }

  ngOnInit() {
    this.nav.show();
  }

}
