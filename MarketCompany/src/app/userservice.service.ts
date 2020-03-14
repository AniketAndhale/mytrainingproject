import { Injectable, Inject } from '@angular/core';
import { User } from 'src/modals/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  httpUrl=environment.host + "user-service/users/"
  constructor(private httpClient:HttpClient,@Inject(HttpClient) private ht,private router:Router) { }


  LoggedIn(){
    let user_id=localStorage.getItem('userId');
    if(user_id==null)
    return false;
    else return true;
  }
  isActivated(user:User){
    if(user.active=="yes"){
          return true;
    }
  }

  saveUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.httpUrl, user);
  }

  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.httpUrl);
  }

  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(this.httpUrl + id);
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>(this.httpUrl, user);
  }

  deleteUser(id:number):Observable<User>{
    return this.httpClient.delete<User>(this.httpUrl + id);
  }
  updateUserInfo(user: User): Observable<User> {
    return this.httpClient.put<User>(this.httpUrl, user);
  }


  reg(){
    return this.ht.get("http://localhost:8000/reg");
  }
  serActivation(email:string):Observable<User>{
    return this.httpClient.get<User>(this.httpUrl+ "activate/" +email);
  }

}
