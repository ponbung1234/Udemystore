import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

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
import { AdminHeaderService } from './service/admin-header.service';
import { CartComponent } from './cart/cart.component';
import { RefundComponent } from './refund/refund.component';
import { PayOptionComponent } from './pay-option/pay-option.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadTransactionComponent } from './upload-transaction/upload-transaction.component';
import { AtmComponent } from './atm/atm.component';
import { ProductService } from './service/product.service';
import { OrderdetailService } from './service/orderdetail.service';
import { SearchComponent } from './search/search.component';
import { CategoryService } from './service/category.service';
import { OrderlistService } from './service/orderlist.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from './service/cart.service';
import { RefundService } from './service/refund.service';
import { AdminComponent } from './Admin/admin-main/admin.component';
import { AdminHeaderComponent } from './Admin/admin-header/admin-header.component';
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { AdminCreateProductComponent } from './Admin/admin-create-product/admin-create-product.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { SlickModule } from 'ngx-slick';
import { LoginService } from './service/login.service';
import { AuthService } from './service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { AddcartPopupComponent } from './addcart-popup/addcart-popup.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { NgXCreditCardsModule } from 'ngx-credit-cards';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import { SuccessComponent } from './success/success.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
 

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
    SearchComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminProductComponent,
    AdminCreateProductComponent,
    DetailpageComponent,
    AddcartPopupComponent,
    CreditCardComponent,
    ScriptHackComponent,
    SuccessComponent,
    PaymentFormComponent

  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    SlickModule.forRoot(),
    NgXCreditCardsModule
  ],
  providers: [
    HeaderServiceService,
    ProductService,
    CategoryService,
    OrderlistService,
    OrderdetailComponent,
    NgbActiveModal,
    OrderdetailService,
    CartService,
    RefundService,
    AdminHeaderService,
    LoginService,
    AuthService,
    CookieService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
