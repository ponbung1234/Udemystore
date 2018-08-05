import { Component, OnInit, Renderer2, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  amounts: number = 193798.4;
  @ViewChild('payform') payformElement:ElementRef;

  @Input() name: string;
  @Input() description: string;
  @Input() currency: string;
  @Input() amount: number;
  @Input() paymentMethods: string;

  @Output() receive = new EventEmitter<any>();
  
  constructor(private _renderer: Renderer2,
    private router: Router,
    private cartComponent: CartComponent
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.addKPayment();
  }

  addKPayment(){
    let script = this._renderer.createElement('script');
    
    script.type = "text/javascript";
    this._renderer.setAttribute(script, 'data-apikey', 'pkey_test_1rCKZrDxLhWqciIRD34zErPKL6WS8Zk9E');
    this._renderer.setAttribute(script, 'data-name', this.name);
    this._renderer.setAttribute(script, 'data-description', this.description);
    this._renderer.setAttribute(script, 'data-currency', this.currency);
    this._renderer.setAttribute(script, 'data-amount', this.amounts.toString());
    this._renderer.setAttribute(script, 'data-payment-methods', this.paymentMethods);
    this._renderer.setAttribute(script, 'src', 'https://sit-dev-kpaymentgateway.new-kpgw.com/ui/v1/kpayment.min.js');

    this._renderer.appendChild(this.payformElement.nativeElement, script);
  }

  onSubmit(){
    let result: any = {};
    const receiveElement = this.payformElement.nativeElement.querySelectorAll('input');
    
    for (const element of receiveElement) {
      result[element.getAttribute('name')] = element.value;
    }

    this.receive.emit(result);
    this.cartComponent.submit("Credit card");
    this.router.navigate(['/success']);
  }
}
