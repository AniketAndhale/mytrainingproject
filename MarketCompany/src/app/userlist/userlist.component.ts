import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from 'src/modals/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService:UserserviceService, private router:Router) { }

  users:User[];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }

  deleteUser(user:User){
    this.userService.deleteUser(user.id).subscribe(data=>{
      this.users = this.users.filter(u=> u !== user)
      alert("User deletd Successfully");
    })  
  }
  updateUser(id:number){
    localStorage.removeItem('userId');
    localStorage.setItem('userId',id.toString());
    this.router.navigate(['update-user']);
  }


}
