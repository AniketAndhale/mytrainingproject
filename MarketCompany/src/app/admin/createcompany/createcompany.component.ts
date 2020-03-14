import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CompanyserviceService } from 'src/app/companyservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {
  companyForm:FormGroup;
  constructor(private companyservice:CompanyserviceService , private formBuilder:FormBuilder,private router :Router) { 
    

  }

  ngOnInit() {

    this.companyForm = this.formBuilder.group({
      id: ['', Validators.required],
      companyname: ['', Validators.required],
      sector: ['',Validators.required],
      ceo: ['',Validators.required],
      bod: ['', [Validators.required, Validators.email]],
     
      companyCode:['',Validators.required],
      turnover: ['', Validators.required]
    });
  }

    addCompany()
    {
      this.companyservice.saveCompany(this.companyForm.value).subscribe(data=>{
        alert('Company added Successfully.');
     
        
      });
  }
}
