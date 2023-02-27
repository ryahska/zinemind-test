import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationModuleRouting } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModuleRouting,
    SharedModule
  ]
})
export class AuthenticationModuleModule { }
