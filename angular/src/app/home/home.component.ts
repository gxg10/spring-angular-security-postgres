import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    console.log('token is ' + sessionStorage.getItem('token'));

    const headers: HttpHeaders = new HttpHeaders({
        'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    if (sessionStorage.getItem('token') != null &&
     sessionStorage.getItem('token').length > 10) {
        console.log('patatata ');
        const options = { headers: headers };
        this.loginService.hello(options)
        .subscribe(
            data => {
                console.log('data is '+data);
                this.userName = data['name'];
            },
            error => {
                if (error.status === 0) {
                    alert('unauthoriz');
                }
            }
        );
    }

  }

  logout() {
      sessionStorage.setItem('token', '');
  }

}
