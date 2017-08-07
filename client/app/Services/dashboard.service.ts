import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Constants } from '../Constants/app.constant';

@Injectable()
export class DashBoardService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http, private config: Constants) {}

  getUserDetails(data) {
      console.log(data,'dashboard service');
    return this.http
      .get(this.config + 'userDetails',data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    localStorage.setItem('token', res.headers.get('x-auth'));
    return body;
  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'server error');
  }
}
