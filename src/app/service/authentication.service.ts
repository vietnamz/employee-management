import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { }
  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin', {headers}).pipe(
    map(
       userData => {
          console.log('map okay');
          console.log(userData)
          sessionStorage.setItem('username',username);
          return userData;
       }
    )).subscribe(result => console.log(result));
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null ));
    return !(user === null );
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
