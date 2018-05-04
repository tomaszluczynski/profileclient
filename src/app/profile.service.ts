import {Injectable} from '@angular/core';
import {Login} from './model/Login';
import {LoginResult} from "./model/LoginResult";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscribable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  login(login: Login) {
    console.log("ProfileService", login.username, login.password)
    //return new LoginResult(false, "", "error.noservice");

    return this.http.get('https://api.github.com/users/seeschweiler');
  }
}
