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

  constructor(private http: HttpClient,
              private router: Router) { }

  login(model: any): Observable<any> {
    console.log(model);
    const url = 'http://localhost:8082/login';
    return this.http.post<Observable<boolean>>(url, {
        userName: model.username,
        password: model.password
    });
    // .subscribe(isValid => {
    //     if (isValid) {
    //         sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
    //         this.router.navigate(['']);
    //         this.isLoggedIn = true;
    //         console.log('is logged ' + this.isLoggedIn)
    //     } else {
    //         alert('Authentication failed.');
    //         this.isLoggedIn = false;
    //     }
    // });
}


}
