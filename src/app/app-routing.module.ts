import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AdminDashComponent } from './admin-module/admin-dash/admin-dash.component';

import { EmployeeDashboardComponent } from './employee-module/employee-dashboard/employee-dashboard.component';
import { AuthGuard } from './guards/auth.guard';

import { AdminLoginPageComponent } from './login/admin-login-page/admin-login-page.component';
import { EmployeeLoginPageComponent } from './login/employee-login-page/employee-login-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: "full"
  },
  {
    path: 'loginAsEmp', component: EmployeeLoginPageComponent
  },
  {
    path: 'loginAsAdmin', component: AdminLoginPageComponent
  },
  {
    path: 'empDash', component: EmployeeDashboardComponent,canActivate:[AuthGuard]
  },{
    path:'admindash', component:AdminDashComponent,canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
