import { Component, OnInit } from '@angular/core';
import { Company } from 'src/modals/Company';
import { CompanyserviceService } from 'src/app/companyservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit {

  constructor(private companyService:CompanyserviceService,private router:Router) { }

  company:Company[];

  ngOnInit() {
    this.companyService.getAllCompany().subscribe(data=>{
      this.company=data;
    })
  }

  

  deleteCompany(company:Company){
    this.companyService.deleteCompany(company.id).subscribe();
    this.company=this.company.filter(i=> i !== company)
    alert('Company Deleted successfully');
  }

  updateCompany(id:number){
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId',id.toString());
    this.router.navigate(['update-company']);
  }

 
}
