import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  isLoggedIn: Boolean;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
      private loginService: LoginService
  ) { }

  ngOnInit() {
      sessionStorage.setItem('token', '');
  }

//   login() {
//       console.log(this.model);
//       const url = 'http://localhost:8082/login';
//       this.http.post<Observable<boolean>>(url, {
//           userName: this.model.username,
//           password: this.model.password
//       }).subscribe(isValid => {
//           if (isValid) {
//               sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
//               this.router.navigate(['']);
//               this.isLoggedIn = true;
//               console.log('is logged '+this.isLoggedIn)
//           } else {
//               alert('Authentication failed.');
//               this.isLoggedIn = false;
//           }
//       });
//   }
    login() {
        this.loginService.login(this.model)
        .subscribe(isValid => {
            console.log(isValid);
            if (isValid) {
                sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
                this.router.navigate(['']);
            } else {
                alert('auth failed.');
            }
        });
    }
}
