import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent implements OnInit {
  login:string="../../assets/images/admin.png";

  public pass1:any;
  public email1:any;


  constructor(private route:Router, private _authservice:AuthService) { }

  adminlogin()
  {

    if(this._authservice.adminlogin(this.email1,this.pass1))
    {
      console.log("inside adminlog comp");

      this.route.navigateByUrl('/admindash');
    }
    //this.route.navigateByUrl('/adminlogin');

  }
  ngOnInit(): void {
  }

}
