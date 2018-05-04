import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import { 
  FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';
import { Register } from '../model/Register';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup

  constructor(private profileService: ProfileService, fb: FormBuilder) {
    this.registrationForm = fb.group(
       {
         'username': ['', [Validators.required, Validators.minLength(8)]],
         'password': ['', [Validators.required, Validators.minLength(8)]],
         'password2': ['', [Validators.required, Validators.minLength(8)]],
         'email': ['', [Validators.required]]
       }
     )
   }

  ngOnInit() {
  }

  get username() {
    return this.registrationForm.get('username'); 
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  register(): boolean {
    let registrationVo = this.buildRegistrationForm();
    //return this.profileService.register(loginVo);
    return false;
  }

  private buildRegistrationForm(): Register {
    return new Register(
      this.username.value,
      this.password.value, 
      this.email.value()
    )
  }
}
