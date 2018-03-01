import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import { 
  FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';
import { Forgot } from '../model/Forgot';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(private profileService: ProfileService, fb: FormBuilder) {
    this.forgotPasswordForm = fb.group(
      {
        'username': ['', [Validators.required, Validators.minLength(8)]],
        'email': ['', []]
      }
    )
   }

  ngOnInit() {
  }

  get username() {
    return this.forgotPasswordForm.get('username'); 
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  forgot() {
    let forgotPasswordVo = this.buildForgotPasswordForm();
    console.log(forgotPasswordVo);
  }

  private buildForgotPasswordForm(): Forgot {
    return new Forgot(
      this.forgotPasswordForm.controls['username'].value, 
      this.forgotPasswordForm.controls['email'].value
    )
  }

  

}
