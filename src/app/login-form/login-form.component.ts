import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { 
  FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';
import { Login } from '../model/Login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private profileService: ProfileService, fb: FormBuilder) {
   this.loginForm = fb.group(
      {
        'username': ['', [Validators.required, Validators.minLength(8)]],
        'password': ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit() {
  }

  get username() {
    return this.loginForm.get('username'); 
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(): boolean {
    let loginVo = this.buildLoginForm();
    return this.profileService.login(loginVo);
  }

  private buildLoginForm(): Login {
    return new Login(
      this.loginForm.controls['username'].value, 
      this.loginForm.controls['password'].value
    )
  }
}