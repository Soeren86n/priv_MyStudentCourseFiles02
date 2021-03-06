import { NgModule } from '@angular/core';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { LogoutComponent } from './logout.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';

@NgModule({
  declarations: [
    LogoutComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    authRouting,
  ],
})
export class AuthModule {

}