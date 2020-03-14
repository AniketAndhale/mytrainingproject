import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private service:UserserviceService, private router: Router) { }
  ngOnInit() {
    this.changePasswordForm=this.formBuilder.group({
      pass1:['',Validators.required],
      pass2:['',Validators.required],
      pass3:['',Validators.required]
    })
  }
  updateThePassword(){
    let old=this.changePasswordForm.controls.old_password.value;
    let pass=this.changePasswordForm.controls.password.value;
    let confirm=this.changePasswordForm.controls.confirm_password.value;
    let userId=sessionStorage.getItem("userId");
    this.service.getUserById(+userId).subscribe(u=>{
      if(u.password1===old){
        if(pass===confirm){
          u.password1=pass;
          this.service.updateUserInfo(u).subscribe(us=>{
            alert("password changed successfully")
            this.router.navigate(['/logout'])
          })
        }
      }else{
        alert("old password doesnt match")
      }
    })
  }
}