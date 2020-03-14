import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {





  updateProfileForm: FormGroup;
  constructor(private service:UserserviceService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.updateProfileForm = this.formBuilder.group({
      id: [],
      username:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],    
      password1:[""],
      password2:[""],
      phone: ['', Validators.required],
      active:[''],
    admin:[''],
    confirm:[''],
    regStatus:[''],
    role:[''],
    enabled:[''],
    });
    const id = sessionStorage.getItem('userId');
    if(+id)
    {
    this.service.getUserById(+id).subscribe(user => {
      this.updateProfileForm.patchValue(user);
    });
  }
}
updateTheUser(){
  this.service.updateUserInfo(this.updateProfileForm.value).subscribe(u=>{
    this.router.navigate(['/login'])
  });
}
}






