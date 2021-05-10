import { EmployeeModuleModule } from './employee-module/employee-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AdminModuleModule } from './admin-module/admin-module.module';
//import { AdminDashComponent } from './admin-module/admin-dash/admin-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    AdminModuleModule,
    EmployeeModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
