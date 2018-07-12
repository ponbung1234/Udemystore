import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from './../service/header-service.service';
import { ActivatedRoute } from '@angular/router';
import { Refund } from './../refund';
import { RefundRequest } from './../refundRequest';
import { RefundService } from './../service/refund.service';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'
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
  refundRequest: RefundRequest[];
  formInput: any[];
  showAlert: boolean = false;

  constructor(
    public nav: HeaderServiceService,
    private activatedRoute: ActivatedRoute,
    private _refundService: RefundService,
    private route: ActivatedRoute,
    private _router: Router
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

  processForm(user) {
    this.formInput = user
    this.refundRequest = user;
    //this.refundRequest.push(this.itemID);
    // console.log(this.formInput);
    
    // console.log(JSON.stringify(this.formInput));
    console.log(user.itemid);
    
    console.log(this.filteredProducts);
    this._refundService.postRefund(user.itemid+","+user.Amount+","+user.reason+","+user.orderid+","+user.productid).subscribe((formInput) => {
      console.log(formInput);
     
    }, (error) => {
      console.log(error);
    });

    this.showAlert = true;
    

    this._router.navigate(['/orderlist']);


  }


}


