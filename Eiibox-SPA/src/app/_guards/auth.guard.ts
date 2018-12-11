import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(public authService: AuthService, private alertifyService: AlertifyService, private router:Router) {}


 canActivate(): boolean {
     if(this.authService.loggedIn())
       {
         return true;
       }
     this.alertifyService.error('You shall not pass!!!');
     this.router.navigate(['/home']);
     return false;
  }
}
