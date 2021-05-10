import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  public d:any;
  adminlogin(email,pass)
  {
    if(email=="admin" && pass=="1234")
    {
      localStorage.setItem('current','insideAdmin');
      //console.log("inside _auth admin login");
      return true;
    }
    this.route.navigateByUrl('/loginAsAdmin');
    return false;

  }
  emplogin(email,pass,id){

    this.d=JSON.parse(localStorage.getItem('empData'));
    console.log(this.d);
    for(var i=0;i<this.d.length;i++)
    {
      //console.log("auth service emplogi for");
      if(this.d[i].idd1==id && this.d[i].emaild==email && this.d[i].passd==pass )
      {
        //console.log("auth service emplogi if")
        //console.log(localStorage.setItem('CurrentEmp',this.d[i]));
        localStorage.setItem('currentE','insideEmp');

        localStorage.setItem('currentEmpID',id);

        this.route.navigateByUrl('/empDash')
        return true;
      }
    }
    this.route.navigateByUrl('/loginAsEmp');
    return false;
  }

}
