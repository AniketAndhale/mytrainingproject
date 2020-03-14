import { Component, OnInit } from '@angular/core';
import { IposerviceService } from 'src/app/iposervice.service';
import { IPO } from 'src/modals/ipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateio',
  templateUrl: './updateio.component.html',
  styleUrls: ['./updateio.component.css']
})
export class UpdateioComponent implements OnInit {

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




