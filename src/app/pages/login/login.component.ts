import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Route } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { FacebookService, LoginResponse, InitParams } from 'ngx-facebook';

interface LoginData{
  email: string;
  password: string;
}


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit{
  ngOnInit(): void {
    let initParams: InitParams = {
      appId      : '2330501350508590',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    };

    this.facebookService.init(initParams);

  }

  public form:FormGroup;
  public submitted:boolean = false;
  public email:AbstractControl;
  public password:AbstractControl;

  constructor(fb:FormBuilder, private facebookService: FacebookService, private router: Router,private loginService: LoginService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  

  public logarFacebook(){
      this.facebookService.login()
      .then((response: LoginResponse) => this.redirect())
      .catch((error: any) => console.error(error));
  }
  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      const login:LoginData = this.form.value;
      if(this.loginService.verify(login.email, login.password)){
        this.redirect();
      }else{
      }
      // this.redirect();
    }else{

    }
  }
  private redirect(){
    this.router.navigate(['/pages']);
  }
}
