import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class ProductService {
  private baseUrl:string='http://172.20.10.2:8080/search';
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getProducts(){
    return this._http.get(this.baseUrl+'/search',this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }
}
