import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-login-page',
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.css']
})
export class EmployeeLoginPageComponent implements OnInit {
login:string="../../assets/images/logg.png"
public id:any;
public pass:any;
public email:any;

//public loginDetails:{}
  constructor(private route:Router,private autheservice:AuthService) { }
  emplogin(){
    //console.log(this.id);

        if(this.autheservice.emplogin(this.email,this.pass,this.id))
        {
          //console.log("after if in emlogin")
          this.route.navigateByUrl('/empDash');
        }

}
  ngOnInit(): void {
    // this.loginDetails={
    //   id:'',
    //   pass:'',
    //   email:''

    }


}
