import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authservice/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor(private route:Router, private auth:AuthService) {}
  canActivate(){
    if (!this.auth.get_token()){
      this.route.navigateByUrl('/login');
    }
    return this.auth.get_token()
  }
  
}
