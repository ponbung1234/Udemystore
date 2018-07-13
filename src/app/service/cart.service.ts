import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'
import{ BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class CartService {
  private baseUrl:string='http://13.229.99.132/cart';
  private baseUrl2:string='http://192.168.43.242:8080/addCart';
  private postUrl:string = 'http://192.168.43.242:8080/checkout';
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});

  private cartNum = new BehaviorSubject<number>(0);
  private num: number;
  cast = this.cartNum.asObservable();
  constructor(private _http:Http) { }

  updateCartNum(productID: number){
    // console.log(this.cartNum);
    // this.cartNum.next(newcart);
    this.cartNum.subscribe((cartNum)=>{this.num = Number(cartNum)})
    this.num = this.num + 1;
    console.log(this.num);
    this.cartNum.next(this.num);
    
    return this._http.post(this.baseUrl2,productID, this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler)

    // this.cartNum.next();
  }

  setCartNum(num:number){
    this.cartNum.next(num);
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
    // console.log(cartCheckOut);
    return this._http.post(this.postUrl,cartCheckOut,this.option).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVE ERROR");
  }
}
