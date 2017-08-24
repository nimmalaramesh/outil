import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class UserService {

 constructor(public _http: Http) {}



     getUsers() {
        return this._http.get('http://localhost:3000/'); }

}
