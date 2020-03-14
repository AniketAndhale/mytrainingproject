import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import {FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserserviceService, private formBuilder:FormBuilder) { }
  
  registerForm:FormGroup;

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password1: ['',Validators.required],
      password2: ['',Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required]
    });
  }
  

  addUser(){
    this.userService.saveUser(this.registerForm.value).subscribe(data=>{
      alert('User Registered Successfully.');
    });
  }

  onsubmit()
  {  
  // this.userService.reg().subscribe(data=>
  //   {
  //     console.log("coming status::::"+data.reg);
  //   })
}

// reg2(){
//   alert("reg..");
//   this.userService.reg().subscribe(data=>
//     {
//       console.log("coming status::::"+data.reg);
//     })

// }

}
