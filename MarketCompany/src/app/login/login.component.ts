
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from 'src/modals/User';
import { UserserviceService } from '../userservice.service';
import { AuthService } from '../auth.service';

// declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 
loginForm: FormGroup
users: User[];
currentUser: User;
message: String;
constructor(private loginService:UserserviceService, private authservice:AuthService, private route: Router, private formBulder: FormBuilder) { }
ngOnInit() {
  this.loginForm = this.formBulder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    //rememeberme:false
   
  });
  // this.loginService.getAllUsers().subscribe(u=>
  // {
  //   this.users=u;
  // });
  this.authservice.logout();
}
isValid() {
  let username = this.loginForm.get("username").value;
  let password = this.loginForm.get("password").value;
  const result$ = this.authservice.authenticate(username, password);
  result$.subscribe(data => {
    sessionStorage.setItem('userId', data.id.toString());
    console.log(data);
    if(data.role=="ROLE_ADMIN")
    {
      this.route.navigate(['/admin'])
    }
 if(data.role=="ROLE_USER") {
    this.route.navigate(['/user']);
    }
  })

}

onSubmit(){

}
logout(){
  this.logout()
}
}
