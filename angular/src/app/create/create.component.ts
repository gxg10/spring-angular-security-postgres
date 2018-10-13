import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: any = {};

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.user);
    this.loginService.addUser(this.user)
    .subscribe(
      result => {
        console.log(result);
      }
    );
    this.user = {};
  }

}
