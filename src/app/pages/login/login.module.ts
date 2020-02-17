import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoguearComponent } from './loguear/loguear.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { NavbarModule } from '../static/navbar/navbar.module';


@NgModule({
  declarations: [LoginComponent, LoguearComponent, RegistrarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NavbarModule
  ]
})
export class LoginModule { }
