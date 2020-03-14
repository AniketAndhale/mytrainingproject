import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/modals/Company';
import { CompanyserviceService } from 'src/app/companyservice.service';

@Component({
  selector: 'app-comparesector',
  templateUrl: './comparesector.component.html',
  styleUrls: ['./comparesector.component.css']
})
export class ComparesectorComponent implements OnInit {

  compareCompany:FormGroup;
  companies:Company[];
  constructor(private formBuilder:FormBuilder,private router:Router, private companyService:CompanyserviceService) { }
  ngOnInit() {
    this.compareCompany=this.formBuilder.group({
      csselect: ['',Validators.required],
      seselect: ['',Validators.required],
      cnsn: ['',Validators.required],
      ctcnsn: ['',Validators.required],
      fperiod: ['',Validators.required],
      tperiod: ['',Validators.required],
     });
     this.companyService.getAllCompany().subscribe(data=>{
      this.companies=data;
    });
  }
  onSubmit() {
    this.router.navigate(["/charts"],{
      queryParams:{
        formData: JSON.stringify(this.compareCompany.value)
      }
    });
  }
  // getAllCompanies(){
  //   this.companyService.getAllCompanies().subscribe(data=>{
  //     this.companies=data;
  //   })
  // }
}