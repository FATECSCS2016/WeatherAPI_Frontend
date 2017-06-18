import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { FacebookModule } from 'ngx-facebook';

import { Login } from './login.component';
import { routing }       from './login.routing';
import { LoginService } from "./login.service";


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    FacebookModule.forRoot()
  ],
  providers:[LoginService],
  declarations: [
    Login
  ]
})
export class LoginModule {}
