import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly Server: string = 'http://localhost:3000/';
    public readonly ApiUrl: string = 'api/';
    public readonly ServerWithApiUrl = this.Server + this.ApiUrl;
}
