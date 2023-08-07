import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterUserComponent } from './login-register-user/login-register-user.component';
import {HttpClientModule} from '@angular/common/http';
import { ConfirmvalidatorDirective } from './confirmvalidator.directive';
import { LoginuserComponent } from './loginuser/loginuser.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterUserComponent,
    ConfirmvalidatorDirective,
    LoginuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
