import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import{ BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CookieService } from 'ngx-cookie-service';
import {LoginService} from './login.service';
@Injectable()
export class CartService {
  private baseUrl:string='http://13.229.99.132/cart';
  // private baseUrl2:string='http://192.168.43.242:8080/postRefund';
  private baseUrl2:string='http://13.229.99.132/addCart';
  private baseUrl3:string='http://13.229.99.132/removeCart';
  private baseUrl4:string='http://13.229.99.132/deleteCart';
  private postUrl:string = 'http://13.229.99.132/checkout';
  // private headers = new Headers({'content-Type':'application/json'});
  private headers = new Headers({'content-Type':'application/json','Authorization': `${this.cookieService.get('userToken')}`});
  private option = new RequestOptions({headers:this.headers});
  

  private cartNum = new BehaviorSubject<number>(0);
  private num: number;
  cast = this.cartNum.asObservable();
  constructor(
    private _http:Http,
    private cookieService: CookieService
  ) { 
    const token: string = cookieService.get('userToken');
   
  }
  // private headers = new Headers({'content-Type':'application/json','authentication': `${getToken}`});
  updateCartNum(cart:string,amount:number){
    // console.log(this.cartNum);
    // this.cartNum.next(newcart);

    this.cartNum.subscribe((cartNum)=>{this.num = Number(cartNum)})
    
    this.num = this.num + amount;
   // console.log(this.num);
    this.cartNum.next(this.num);
    //console.log("updated");
    return this._http.post(this.baseUrl2,cart, this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler)
    // this.cartNum.next();
  }
  removeCartNum(cart:string,amount:number){
    this.cartNum.subscribe((cartNum)=>{this.num = Number(cartNum)})
    
    this.num = this.num - amount;
    //console.log(this.num);
    this.cartNum.next(this.num);
    //console.log("removed");
    return this._http.post(this.baseUrl3,cart, this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler)
  }

  deleteProductfromCart(cart:number){
    return this._http.post(this.baseUrl4,cart, this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler)
  }

  setCartNum(num:number){
    this.cartNum.next(num);
    return num;
  }

  getCart(){
    return this._http.get(this.baseUrl,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getCartNum(){
    return this._http.get(this.baseUrl2,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }


  checkOut(cartCheckOut:string){
     //console.log(cartCheckOut);
    return this._http.post(this.postUrl,cartCheckOut,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }
}
