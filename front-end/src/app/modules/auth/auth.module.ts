import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, RegisterComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    TranslateModule
  ]
})
export class AuthModule { }
