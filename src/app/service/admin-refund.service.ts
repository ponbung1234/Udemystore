import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
@Injectable()
export class AdminRefundService {
  private baseUrl:string='http://192.168.43.242:8080/adminRefund';
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getRefundList(){
    return this._http.get(this.baseUrl,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  changeStatus(refundID: number,status: string){

  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }
}
