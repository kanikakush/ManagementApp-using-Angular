import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  myimage:string="../../../assets/images/bac.gif";
  constructor(private router:Router) { }
  loginAsEmp(){
    this.router.navigateByUrl('/loginAsEmp');

  }
  loginAsAdmin()
  {
    this.router.navigateByUrl('/loginAsAdmin');
  }

  ngOnInit(): void {
  }

}
