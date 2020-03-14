import { Component, OnInit } from '@angular/core';
import { ComparecompanyService } from 'src/app/comparecompany.service';
import { CompareCompany } from 'src/modals/comparecompany';

@Component({
  selector: 'app-comparecompanylist',
  templateUrl: './comparecompanylist.component.html',
  styleUrls: ['./comparecompanylist.component.css']
})
export class ComparecompanylistComponent implements OnInit {

  constructor(private comparecompanyservice:ComparecompanyService) { }
  comparecompany:CompareCompany[];

  ngOnInit() {
    this.comparecompanyservice.getAllCompareCompany().subscribe(data=>{
      this.comparecompany=data;
    })
  }

  deleteCompareCompany(comparecompany:CompareCompany){
    this.comparecompanyservice.deleteCompareCompany(comparecompany.id).subscribe(data=>{
      alert('Compare Company Deleted successfully');
    })
  }
  updateCompany(comparecompany:CompareCompany){
    this.comparecompanyservice.updateCompareCompany(comparecompany).subscribe(data=>{
      alert('compare company updated')
    })
}

 
}
