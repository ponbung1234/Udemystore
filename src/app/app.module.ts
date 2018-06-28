import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';

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
import { HttpClientModule } from '@angular/common/http';
import { UploadTransactionComponent } from './upload-transaction/upload-transaction.component';
import { AtmComponent } from './atm/atm.component';
import { ProductService }from './service/product.service';
import { SearchComponent } from './search/search.component';
import { CategoryService } from './service/category.service';

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
    UploadTransactionComponent,
    AtmComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [HeaderServiceService,ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
