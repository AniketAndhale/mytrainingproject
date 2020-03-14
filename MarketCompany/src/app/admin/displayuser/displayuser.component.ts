import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/userservice.service';
import { User } from 'src/modals/User';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  users:User[];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }

  deleteUser(user:User){
    this.userService.deleteUser(user.id).subscribe(data=>{
      this.users = this.users.filter((u)=>{
        u.id !== data.id;
      })
    })
  }

}
