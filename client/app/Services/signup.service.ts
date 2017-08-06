import { Constants } from './../Constants/app.constant';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignUpService {
  constructor(private http: Http, private config: Constants) {}

  registerUserDetails(data) {
    return this.http
      .post(this.config.ServerWithApiUrl + 'SignUp', data)
      .map(this.extractData)
      .do(response => console.log(response))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    localStorage.setItem('token', res.headers.get('token'));
    return body;
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json() || 'server error');
  }
}
