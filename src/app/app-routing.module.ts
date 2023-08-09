import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginRegisterUserComponent } from './login-register-user/login-register-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {path: 'login' , component: LoginuserComponent, title: "Login"},
  {path: 'register' , component: LoginRegisterUserComponent, title: "Register"},
  {path: 'dashboard' , component: DashboardComponent, title: "Home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
