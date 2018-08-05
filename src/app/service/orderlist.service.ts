import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class OrderlistService {
  private baseUrl:string='http://13.229.99.132/order';
  private headers = new Headers({'content-Type':'application/json','Authorization': `${this.cookieService.get('userToken')}`});
  private option = new RequestOptions({headers:this.headers});
  constructor(private _http:Http,
    private cookieService: CookieService) { }

  getOrderlist(){
    return this._http.get(this.baseUrl,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }


  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }
}
