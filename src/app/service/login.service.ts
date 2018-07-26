import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CookieService } from 'ngx-cookie-service';
import { text } from '../../../node_modules/@angular/core/src/render3/instructions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  private baseUrl: string = 'http://192.168.43.242:8080/login';

  private headers = new Headers({ 'content-Type': 'text' });
  // const options = {headers, params, responseType: 'text' as 'text'};
  private option = new RequestOptions({
    headers: this.headers
  });
  // private options: {
  //     headers: this.headers,
  //     responseType: 'text'
  //   };
  userToken: string;

  constructor(
    private _http: Http,
    private cookieService: CookieService,
    private httpClient: HttpClient

  ) { }

  login(user: string, pass: string) {
    const users = {
      username: user,
      password: pass
    };
    const myObjStr = JSON.stringify(users);
    console.log(myObjStr);
    //set cookie
    // this.cookieService.set(user, pass);

    return this._http.post(this.baseUrl, myObjStr, this.option).map((response:Response)=>response.headers.get('authorization')).catch(this.errorHandler);
    // .map((response: Response) => { response.headers.get("Authorization")})
    //   .catch(this.errorHandler)
  }
  getToken(){
    return this.cookieService.get('userToken');
  }

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVE ERROR");
  }
}
