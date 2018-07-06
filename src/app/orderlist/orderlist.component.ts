import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OrderdetailComponent } from './../orderdetail/orderdetail.component';
import { HeaderServiceService } from './../service/header-service.service';
import { OrderlistService } from '../service/orderlist.service';
import { Orderlist } from '../Orderlist';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orderlist: Orderlist[] = [];
  show: boolean = true;
  i: number = 0;
  categoryR: string = null;
  categoryName: string;
  public orderNum: Number;


  constructor(
    private _orderlistService: OrderlistService,
    public nav: HeaderServiceService,
    private route: ActivatedRoute,
    private orderdetailCom: OrderdetailComponent

  ) {

    _orderlistService.getOrderlist().subscribe((orderlist) => {
      console.log(orderlist);
      this.orderlist = orderlist;

    }, (error) => {
      console.log(error);
    })

  }
  openmodal(content,orderID: number){
    this.orderdetailCom.openVerticallyCentered(content,orderID);
    this.orderNum = orderID;
    //console.log(orderID);
  }

  ngOnInit() {
    this.nav.show();

  }



}
