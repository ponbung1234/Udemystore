import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { ActivatedRoute } from '@angular/router';
import { Refund } from './../refund';
import { RefundService } from './../service/refund.service';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  closeResult: string;
  numbers: number[];
  amount: number;
  itemID: any;
  refund: Refund[] = [];
  filteredProducts: Refund[] = [];

  constructor(
    public nav: HeaderServiceService,
    private activatedRoute: ActivatedRoute,
    private _refundService: RefundService,
    private route: ActivatedRoute
  ) {

    _refundService
      .getRefund().switchMap(refund => {

        this.refund = refund;
        //console.log(this.refund);
        return route.queryParamMap;

      })
      .subscribe(params => {
        this.itemID = params.get('itemID');
        //console.log(this.itemID);
        this.filteredProducts = (this.refund) ?
          this.refund.filter(p => p.item_id === Number(this.itemID)) :
          this.refund;
        console.log(this.filteredProducts);

      });
     // console.log(this.filteredProducts);
      

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      //this.itemID = params['itemID'];
      this.amount = params['amount'];
      console.log(this.amount);
      this.numbers = Array(10).fill(0).map((x, i) => i);
    });
    this.nav.show();
  }

}
