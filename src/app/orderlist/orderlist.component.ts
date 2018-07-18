import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OrderdetailComponent } from './../orderdetail/orderdetail.component';
import { HeaderServiceService } from './../service/header-service.service';
import { OrderlistService } from '../service/orderlist.service';
import { Orderlist } from '../Orderlist';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Orderdetail } from '../orderdetail';
import {OrderdetailService} from '../service/orderdetail.service';
import { isNull } from 'util';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orderlist: Orderlist[] = [];
  orderdetail: Orderdetail[] = [];
  show: boolean = false;
  i: number = 0;
  categoryR: string = null;
  categoryName: string;
  public orderNum: Number;
  numWords= ['One','Two','Three','Four','Five','Six','seven'];
  showLoader = true;

  constructor(
    private _orderlistService: OrderlistService,
    public nav: HeaderServiceService,
    private route: ActivatedRoute,
    private orderdetailCom: OrderdetailComponent,
    private _orderdetailService: OrderdetailService

  ) {

    _orderlistService.getOrderlist().subscribe((orderlist) => {
      console.log(orderlist);
      this.orderlist = orderlist;
      if(this.orderlist.length>0){
        this.showLoader = false
      }
  

    }, (error) => {
      console.log(error);
    })

    _orderdetailService.getOrderdetail().subscribe((orderdetail) => {
      console.log(orderdetail);
      this.orderdetail = orderdetail;

    }, (error) => {
      console.log(error);
    })

  }
  openmodal(content,orderID: number){
    this.orderdetailCom.openVerticallyCentered(content,orderID);
    this.orderNum = orderID;
    //console.log(orderID);
  }
  compareItem(od: any,ol: any){
    if(od == ol){
      return true;
    }
    else{
      return false;
    }
  }

  ngOnInit() {
    this.nav.show();

  }

}
