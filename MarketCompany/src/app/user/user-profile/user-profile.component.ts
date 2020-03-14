import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { Router } from '@angular/router';
import { User } from 'src/modals/User';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
//   users:User; 

//   constructor(private userservice:UserserviceService, private router:Router) { }
 
//   ngOnInit() {
//     const c = sessionStorage.getItem('userId');
//     this.userservice.getUserById(+c).subscribe(data =>{
//       this.users=data;
//     })
//   }

//   updateProfile(){
//     this.router.navigate(['update-profile'])
//   }
// }
user:User;
constructor(private router: Router, private service:UserserviceService,authService:AuthService) { }
  ngOnInit() {
    const id = sessionStorage.getItem('userId');
    if(+id >0 ){
    this.service.getUserById(+id).subscribe(data =>{
      this.user=data;
    });
  }
  }
  updateUser(){
    this.router.navigate(['/updateProfile']);
  }
  updatePassword(){
    this.router.navigate(['/changePassword']);
  }
}