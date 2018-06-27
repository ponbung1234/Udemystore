import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { RegisterComponent } from './register/register.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import { CartComponent } from './cart/cart.component';
import { RefundComponent } from './refund/refund.component';
import { AtmComponent } from './atm/atm.component';
import { UploadTransactionComponent } from './upload-transaction/upload-transaction.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
 // {path: '', component: ItemComponent},
  {path: '', component: ItemComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'orderlist', component: OrderlistComponent},
  {path: 'cover', component: CoverpageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'refund', component: RefundComponent},
  {path: 'atm',component: AtmComponent},
  {path:'uploadTs',component: UploadTransactionComponent},
  {path: 'search', component: SearchComponent}
  
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
