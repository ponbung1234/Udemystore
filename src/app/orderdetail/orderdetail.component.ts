import { Component, OnInit ,Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderServiceService } from './../service/header-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//  import { OrderlistService } from '../service/orderlist.service';
//  import { Orderlist } from '../Orderlist';
//  import { ActivatedRoute } from '@angular/router';
//  import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
  closeResult: string;
  private anyData: any;
  private anyDataForm: any;
  public orderNum = 5;


  constructor(
    private modalService: NgbModal,public nav: HeaderServiceService,
    public activeModal: NgbActiveModal
   // private _orderlistService: OrderlistService
  ) {

    // _orderlistService.getOrderlist().subscribe((orderlist) => {
    //   console.log(orderlist);
    //   this.orderlist = orderlist;

    // }, (error) => {
    //   console.log(error);
    // })

  }

  ngOnInit() {
    this.nav.show();
  }

  public openVerticallyCentered(content,orderID: number) {

    const modalRef = this.modalService.open(content, { centered: true });
   // modalRef.componentInstance.anyDataForm = this.anyData;
   modalRef. result.then(() => { console.log('When user closes'); }, () => { console.log('Backdrop click')})
   
    console.log(content);
    console.log(this.orderNum);
  }

  public closeModal(){
    this.activeModal.close('Close click');
  }


}
