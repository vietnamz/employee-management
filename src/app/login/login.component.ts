import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'delgemoon';
  password = 'password';
  invalidLogin = false;
  constructor( 
    private router : Router,
    private loginservice : AuthenticationService ) { }

  ngOnInit() {
  }
  checkLogin() {
    console.log(this.username);
    console.log(this.password);
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
      console.log("authentication okay");
    } else {
      console.log("authentication failed");
      this.invalidLogin = true;
    }
  }

}
