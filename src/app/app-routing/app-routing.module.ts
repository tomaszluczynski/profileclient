import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginFormComponent
  },
  {
    path: 'register', 
    component: RegistrationFormComponent
  },
  {
    path: 'forgotpassword', 
    component: ForgotPasswordComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
