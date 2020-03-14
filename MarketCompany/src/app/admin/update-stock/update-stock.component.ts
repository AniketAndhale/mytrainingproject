import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/stock.service';
import { StockExchange } from 'src/modals/stock';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {
  updatestockForm: FormGroup;
  navbarOpen = false;
  val:number;
 
   toggleNavbar() {
     this.navbarOpen = !this.navbarOpen;
   }
 constructor(private formBuilder:FormBuilder, private stockService:StockService,private router: Router) { }
 updateStockExchange(){
   this.stockService.updateStockExchange(this.updatestockForm.value).subscribe(u => {
    alert('StockExchange updated successfully');
   })
 }
 onSubmit() {
   console.log(this.updatestockForm.value);
   
   this.router.navigate(['/view']);
 }
 ngOnInit() {
   const id = localStorage.getItem('stockId');
   // alert(id);
   if(+id > 0){
     this.stockService. getStockExchangeById(+id).subscribe(ip =>{
       
       this.updatestockForm.patchValue(ip);
     });
   }
   this.updatestockForm=this.formBuilder.group({
     id:[],
     stockexchangename:['', Validators.required],
     brief:['', Validators.required],
     address:['', Validators.required],
     remark: ['', Validators.required]
   });
 }
}
