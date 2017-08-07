import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class AuthenticateService {
  constructor(private http: Http) {}

  isLoggedOn() {
    return tokenNotExpired();
  }
}
