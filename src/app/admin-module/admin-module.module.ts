import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashComponent,

  ],
  imports: [
    CommonModule,
   FormsModule,

  ],
  exports:[
    AdminDashComponent,

  ]
})
export class AdminModuleModule { }
