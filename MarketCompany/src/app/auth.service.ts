import { Injectable } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/modals/User';
const url ="http://localhost:8765/user-service/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService:UserserviceService,private http:HttpClient) { }


  authenticate(username: string, password: string) {
    // create a security token
    let authenticationToken = "Basic " + window.btoa(username + ":" + password);
    console.log(authenticationToken);
    let headers = new HttpHeaders({
      Authorization: authenticationToken
    });
    console.log("calling server")
    // send the request
    return this.http.get(url, { headers }).pipe(
      // success function
      map((successData :User)=> {
        console.log("success ")
        sessionStorage.setItem("username", username );
        // save the token
        sessionStorage.setItem("token", authenticationToken);
        sessionStorage.setItem("role",successData.role==="ROLE_ADMIN"? "admin":"user");
        sessionStorage.setItem("userId",successData.id.toString());
    
        return successData;
      }),
     
      map(error => {
        return error;
      }),
      map(failureData => {
        // console message 
        console.log("failure")
        return failureData;
      })
    );
  }
  getAuthenticationToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    if (user == null)
      return false;
    return true;
  }
  getProfileUrl(): string {
    let url = sessionStorage.getItem("profile");
    15
    return url;
  }
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userId");
  }
  getUserDetails(): string {
    let user = sessionStorage.getItem('usename');
    return user;
  }
}

