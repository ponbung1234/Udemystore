import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { RegisterComponent } from './register/register.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
const routes: Routes = [
 // {path: '', component: ItemComponent},
  {path: '', component: ItemComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'orderlist', component: OrderlistComponent},
  {path: 'cover', component: CoverpageComponent}
  
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
