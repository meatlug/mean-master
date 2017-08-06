import { AuthenticateService } from './../Services/auth.service';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticateService, private router : Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedOn()) {
             return true;
        }

    this.router.navigate(['/login']);
        return false;
    }
}