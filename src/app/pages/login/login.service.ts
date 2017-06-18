import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  login ={
    username: 'admin@teste.com',
    password: 'admin'
  }
  constructor() { }
  public verify(username, password):boolean{
    return (username === this.login.username && password === this.login.password) ? true : false;
  }

}
