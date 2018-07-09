import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  closeResult: string;
  numbers: number[];
  amount: number;

  constructor(
    public nav: HeaderServiceService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.amount = params['amount'];
      let itemID = params['itemID'];
      console.log(this.amount);
      console.log(itemID);
      this.numbers = Array(10).fill(0).map((x,i)=>i);
    });
    this.nav.show();
  }

}
