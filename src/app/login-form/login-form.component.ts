import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {
  FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';
import {Login} from '../model/Login';
import {LoginResult} from "../model/LoginResult";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  submitted: boolean;
  sent: boolean;

  constructor(private profileService: ProfileService, fb: FormBuilder) {
    this.loginForm = fb.group(
      {
        'username': ['', [Validators.required, Validators.minLength(8)]],
        'password': ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit() {
    this.submitted = false;
    this.sent = false;
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    window.alert('go')
    this.submitted = true;
    if (this.loginForm.valid) {
      let loginVo = this.buildLoginForm();
      this.sent = true;
      this.profileService.login(loginVo).subscribe(data => {
        this.loginFailure()
      });
    }
  }

  loginFailure() {
    this.sent = false;
    this.message = "username of password is incorrect"
  }

  private buildLoginForm(): Login {
    return new Login(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value
    )
  }
}
