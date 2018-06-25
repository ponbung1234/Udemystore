import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModalRegistComponent } from './modal-regist/modal-regist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { HeaderServiceService } from './service/header-service.service';
import { CartComponent } from './cart/cart.component';
import { RefundComponent } from './refund/refund.component';
import { PayOptionComponent } from './pay-option/pay-option.component';
import { FooterComponent } from './footer/footer.component';
import { AtmComponent } from './atm/atm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvertiseComponent,
    ItemComponent,
    LoginComponent,
    RegisterComponent,
    ModalRegistComponent,
    OrderlistComponent,
    OrderdetailComponent,
    CoverpageComponent,
    CartComponent,
    RefundComponent,
    PayOptionComponent,
    FooterComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [HeaderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
