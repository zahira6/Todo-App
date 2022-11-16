import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface loginForm {
  email: string;
  password: string;
};

export interface user {
  email: string;
  password: string;
  passwordConfirm: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient) { }

    login(loginForm: loginForm) {
      return this.http.post<any>('/api/user/login/', loginForm).pipe(
        map((token) => {
          localStorage.setItem('blog-token', token.access_token);
          return token;
        })
      )
    } 

    registration(user: any) {
      return this.http.post<any>('http://127.0.0.1:5000/api/register', user).pipe(
        map(user => user) 
      )
    }
}
