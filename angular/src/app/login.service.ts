import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // model: any = {};
  isLoggedIn: Boolean;
  urlUser = 'http://localhost:8082/user';
  urlLogin = 'http://localhost:8082/login';
  urlAdd = 'http://localhost:8082/add';

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {
    console.log(model);
    return this.http.post<Observable<boolean>>(this.urlLogin, {
        userName: model.username,
        password: model.password
    });
  }

  hello(options: any): Observable<any> {
    return this.http.post<Observable<Object>>(this.urlUser, {}, options);
  }

  addUser(model: any): Observable<any> {
    return this.http.post<Observable<Object>>(this.urlAdd, {
      userName: model.username,
      password: model.password
    });
  }


}
