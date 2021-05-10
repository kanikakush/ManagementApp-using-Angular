import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private route:Router){

  }
  canActivate(){
    if(localStorage.getItem('current'))
    {
      return true;
    }else if(localStorage.getItem('currentE')){
      return true;
    }

    this.route.navigateByUrl('/login')
    return false;
  }

}
