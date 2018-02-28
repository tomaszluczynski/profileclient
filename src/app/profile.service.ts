import { Injectable } from '@angular/core';
import { Login } from './model/Login';
@Injectable()
export class ProfileService {

  constructor() { }

  login(login: Login): boolean {
    console.log("ProfileService", login.username, login.password)
    return false;
  }
}
