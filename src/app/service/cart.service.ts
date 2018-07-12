import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
@Injectable()
export class CartService {
  private baseUrl:string='http://13.229.99.132/cart';
  private postUrl:string = '192.168.43.242:8080/checkout';
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getCart(){
    return this._http.get(this.baseUrl,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }

  checkOut(cartCheckOut:string){
    // console.log(cartCheckOut);
    return this._http.post(this.postUrl,cartCheckOut,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
}
