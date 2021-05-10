import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeeLoginPageComponent } from './employee-login-page/employee-login-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginPageComponent,
    EmployeeLoginPageComponent,
    AdminLoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class LoginModule { }
