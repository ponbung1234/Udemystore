import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import { RefundRequest } from './../refundRequest';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class RefundService {
  refund: RefundRequest[];
  private baseUrl1:string='http://192.168.43.242:8080/refund';
  private baseUrl2:string='http://192.168.43.242:8080/postRefund';
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getRefund(){
    return this._http.get(this.baseUrl1,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  itemid:RefundRequest[]
  postRefund(itemid: string){
    //console.log("itemud"+itemid);
    let test = JSON.stringify(itemid);
    let test1 = itemid;
    console.log(test);
    return this._http.post(this.baseUrl2,itemid, this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler)
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }

  // setter(refund: Refund){
  //   this.refund=refund;
  // }
}
