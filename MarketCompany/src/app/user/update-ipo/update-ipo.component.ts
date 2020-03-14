import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IposerviceService } from 'src/app/iposervice.service';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  updateipoForm: FormGroup;
  navbarOpen = false;
  val:number;
 
   toggleNavbar() {
     this.navbarOpen = !this.navbarOpen;
   }


  constructor(private formBuilder:FormBuilder,private router: Router,private ipoService:IposerviceService) { }

  updateIPO(){
    this.ipoService.updateIPO(this.updateipoForm.value).subscribe(u => {
    
     alert('IPO updated successfully');
    })
  }
  onSubmit() {
    console.log(this.updateipoForm.value);
    
    this.router.navigate(['/view']);
  }
  ngOnInit() {
    const id = localStorage.getItem('ipoId');
    // alert(id);
    if(+id > 0){
      this.ipoService. getIPOById(+id).subscribe(ip =>{
        
        this.updateipoForm.patchValue(ip);
      });
    }
    this.updateipoForm=this.formBuilder.group({
      id:[],
      companyName:['', Validators.required],
      stockExchange:['', Validators.required],
      pricePerShare:['', Validators.required],
      totalStocks:['',Validators.required],
      remarks: ['', Validators.required]
    });
  }
  }
  
  