import { Component, ElementRef, ViewChild, Input ,AfterViewChecked} from '@angular/core';

@Component({
    selector: 'app-script-hack',
    templateUrl: './script-hack.component.html',
    styleUrls: ['./script-hack.component.css']
})

export class ScriptHackComponent implements AfterViewChecked{

    @Input()
    src: string;

    @Input()
    type: string;


    @ViewChild('script') script: ElementRef;

    convertToScript() {
        var element = this.script.nativeElement;
        var script = document.createElement("script");
        script.type = this.type ? this.type : "text/javascript";
        script.setAttribute('data-apikey', 'pkey_test_1rCKZrDxLhWqciIRD34zErPKL6WS8Zk9');
        script.setAttribute('data-name', 'Shoes Space');
        script.setAttribute('data-currency', 'THB');
        script.setAttribute('data-amount', '74.00');
        script.setAttribute('data-payment-methods', 'card');

        if (this.src) {
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        // var parent = element.parentElement;
        // parent.parentElement.replaceChild(script, parent);

    }

    ngAfterViewInit() {
        this.convertToScript();

    }
    
    ngAfterViewChecked() {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        // const KPayment: any = window;
        // console.log(KPayment)
    
        // KPayment.create({
        //     apiKey: 'pkey_test_1rCKZrDxLhWqciIRD34zErPKL6WS8Zk9',
        //     name:"Shoes Space",
        //     currency:"THB",
        //     amount:"74.00",
        //     paymentMethods:"card"
        // });
        
    }
}
