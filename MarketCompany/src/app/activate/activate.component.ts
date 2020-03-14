import { Component, OnInit, Inject } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
    msg:string;
  constructor(private userService:UserserviceService, private router:Router) { }

  ngOnInit() {
   
    this.checkActivation()
  }
  checkActivation() {
  
    var urlad=this.router.url
    var strarr=urlad.split("?")[1]
    var email=strarr.substring(0,strarr.length-1);
    this.userService.serActivation(email).subscribe(data=>{
      data.enabled=true;
      this.userService.updateUser(data).subscribe(u=>{
        this.msg="Activation successful,Now you can login to the site and continue"
      })
    },error=>{
      this.msg="Invalid URL"
    })
  }
}
