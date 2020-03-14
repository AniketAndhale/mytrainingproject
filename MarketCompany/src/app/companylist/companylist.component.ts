import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from '../companyservice.service';
import { Company } from 'src/modals/Company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
    templateUrl: './companylist.component.html',
   styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  constructor(private companyService:CompanyserviceService,private router:Router) { }

  company:Company[];

  ngOnInit() {
    this.companyService.getAllCompany().subscribe(data=>{
      this.company=data;
    })
  }

  deleteCompany(company:Company){
    this.companyService.deleteCompany(company.id).subscribe(data=>{
      alert('Company Deleted successfully');
    })
  }

  updateCompany(id:number){
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId',id.toString());
    this.router.navigate(['update-company']);
  }

 
}
