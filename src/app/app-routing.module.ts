import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTranTypeComponent } from './add-tran-type/add-tran-type.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{path:'', component : HomeComponent},
  //{path:'', component : AddUserComponent},
  {path:'home', redirectTo : '/' },
  {path:'login', component : LoginComponent},
  {path:'newUser', component : AddUserComponent},
  {path:'newTranType', component : AddTranTypeComponent},
  {path:'newTran', component : AddTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
