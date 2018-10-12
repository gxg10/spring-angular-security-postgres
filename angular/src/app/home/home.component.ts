import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.init();
  }

  init() {
    const url = 'http://localhost:8082/user';

    const headers: HttpHeaders = new HttpHeaders({
        'Authorization': 'Basic ' + sessionStorage.getItem('token')
    });

    if (sessionStorage.getItem('token').length > 10) {
        console.log('patatata ');
        const options = { headers: headers };
    this.http.post<Observable<Object>>(url, {}, options)
        .subscribe(
            data => {
                this.userName = data['name'];
            },
            error => {
                if (error.status === 0) {
                    alert('Unauthorized');
                }
                console.log(error.status);
            }
        );
    }

  }

  logout() {
      sessionStorage.setItem('token', '');
  }
  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return 'Something bad happened; please try again later.';
    }
}
