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
      private router: Router,
      private loginService: LoginService
  ) { }

  ngOnInit() {
      sessionStorage.setItem('token', '');
  }

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
