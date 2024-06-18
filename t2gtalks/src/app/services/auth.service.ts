import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login_details, token_details } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static isLoggedIn: any;

  constructor(private http: HttpClient) { }
  isLoggedIn = false;

  loginUser(logins: login_details){
    return this.http.post<{message?:string, token?:string, error?:string}>('http://localhost:4115/auth/login', logins)
  }

  checkDetails(token:string){
    return this.http.get<token_details>('http://localhost:4115/auth/check-details', {
      headers:{
        'token': token
      }
    })
  }

  createAccount(user: {name:string, username: string, email:string, password:string}){
    return this.http.post<{message?:string, error?:string}>('http://localhost:4115/user/create', user)
  }
}
