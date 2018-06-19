import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
 // {path: '', component: ItemComponent},
  {path: '', component: ItemComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
  
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
