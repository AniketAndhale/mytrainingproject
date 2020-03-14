import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComparecompanyService } from 'src/app/comparecompany.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
export class ComparecompanyComponent implements OnInit {
comparecompanyForm:FormGroup;
  constructor(private comparecompanyservice:ComparecompanyService, private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {

    this.comparecompanyForm = this.formBuilder.group({
      // id: ['', Validators.required],
       companyname: ['', Validators.required],
      stockname: ['',Validators.required],
      // companyname: ['',Validators.required],
      // fperiod: ['', [Validators.required, Validators.email]],
      // tperiod: ['', Validators.required]
    });
    //this.router.navigate(['/login'])
  }

    generateMap()
    {
      //  this.comparecompanyservice.saveCompareCompany(this.comparecompanyForm.value).subscribe(data=>{
      //    alert('Company added Successfully.');\
     

     
      alert("map Generated");
      
         this.router.navigate(['/chart12']);
      //  });
     

    
  }
}
