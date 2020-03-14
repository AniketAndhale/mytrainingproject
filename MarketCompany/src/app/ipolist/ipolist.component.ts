// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-ipolist',
//   templateUrl: './ipolist.component.html',
//   styleUrls: ['./ipolist.component.css']
// })
// export class IpolistComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { CompanyserviceService } from '../companyservice.service';
import { Company } from 'src/modals/Company';
import { IPO } from 'src/modals/ipo';
import { IposerviceService } from '../iposervice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipolist',
    templateUrl: './ipolist.component.html',
   styleUrls: ['./ipolist.component.css']
})
export class IpolistComponent implements OnInit {

  constructor(private  IpoService:IposerviceService,private router:Router) { }

  ipo:IPO[];

  ngOnInit() {
    this.IpoService.getAllIPO().subscribe(data=>{
      this.ipo=data;
    })
  }

  // deleteIPO(ipo:IPO){
  //   this.IpoService.deleteIPO(ipo.id).subscribe(data=>{
  //     alert('IPO Deleted successfully');
  //   })
  // }

  deleteIPO(ipo:IPO){
    this.IpoService.deleteIPO(ipo.id).subscribe();
    this.ipo=this.ipo.filter(i=> i !== ipo)
    alert('IPO Deleted successfully');
  }

  updateIPO(id:number){
    localStorage.removeItem('ipoId');
    localStorage.setItem('ipoId',id.toString());
    this.router.navigate(['update-ipo']);
  }

 
}




