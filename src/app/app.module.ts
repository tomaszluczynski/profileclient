import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProfileService } from "./profile.service";
import { RegistrationFormComponent } from './registration-form/registration-form.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: ProfileService, useClass: ProfileService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
