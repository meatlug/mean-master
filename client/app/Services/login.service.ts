import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Constants } from '../Constants/app.constant';
import { Observable } from 'rxjs/Observable';
import { Users } from '../Models/user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http, private _configuration: Constants) { }

    /**
     * CheckUserLogin
     */

    public checkUserDetails = (data): Observable<Users[]> => {
        return this.http
            .post(this._configuration.ServerWithApiUrl + 'login', data, { headers: this.headers })
            .map(this.extractData)
            .do((response) => console.log(response))
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json() || 'server error');
    }
};
