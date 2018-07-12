import { Component, OnInit } from '@angular/core';
import { AdminRefundService } from './../../service/admin-refund.service';
import { AdminRefund } from '../../admin-refund';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-admin-refund',
  templateUrl: './admin-refund.component.html',
  styleUrls: ['./admin-refund.component.scss']
})
export class AdminRefundComponent implements OnInit {
  refundlist: AdminRefund[] = [];

  constructor(private _adminrefundservice: AdminRefundService) {

    _adminrefundservice.getRefundList().subscribe((refundlist) => {
      // console.log(category);
       this.refundlist = refundlist;
  
     }, (error) => {
       console.log(error);
     })

   }

  ngOnInit() {
  }
  Accept(refundID: number){
    this._adminrefundservice.changeStatus(refundID,"Accept");
       
  }
  Denied(refundID: number){
    this._adminrefundservice.changeStatus(refundID,"Denied");
  }
  


}
