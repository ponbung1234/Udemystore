import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import{ BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class LoginService {
  private baseUrl:string='http://13.229.99.132/login';
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  login(user: string){
    return this._http.post(this.baseUrl,user, this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler)
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }
}
