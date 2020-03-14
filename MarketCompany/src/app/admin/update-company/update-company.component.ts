import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyserviceService } from 'src/app/companyservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})

export class UpdateCompanyComponent implements OnInit {
  updatecompanyForm: FormGroup;
  navbarOpen = false;
  val:number;
 
   toggleNavbar() {
     this.navbarOpen = !this.navbarOpen;
   }
 constructor(private formBuilder:FormBuilder, private CompanyService:CompanyserviceService,private router: Router) { }
 updateCompany(){
   this.CompanyService.updateCompany(this.updatecompanyForm.value).subscribe(u => {
    alert('Company updated successfully');
    this.router.navigate(['/managecompany']);
   })
 }
 onSubmit() {
   console.log(this.updatecompanyForm.value);
   
   this.router.navigate(['/managecompany']);
 }
 ngOnInit() {
   const id = localStorage.getItem('companyId');
   // alert(id);
   if(+id > 0){
     this.CompanyService. getCompanyById(+id).subscribe(ip =>{
       
       this.updatecompanyForm.patchValue(ip);
     });
   }
   this.updatecompanyForm=this.formBuilder.group({
     id:[],
     companyname:['', Validators.required],
     sector:['', Validators.required],
     ceo:['', Validators.required],
     bod: ['', Validators.required],
     companyCode:['',Validators.required],
     turnover: ['', Validators.required]
     
   });
 }
}
