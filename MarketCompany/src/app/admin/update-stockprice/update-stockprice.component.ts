import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StockpriceService } from 'src/app/stockprice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stockprice',
  templateUrl: './update-stockprice.component.html',
  styleUrls: ['./update-stockprice.component.css']
})
export class UpdateStockpriceComponent implements OnInit {
updatestockPriceForm: FormGroup;
navbarOpen = false;
val:number;

 toggleNavbar() {
   this.navbarOpen = !this.navbarOpen;
 }
constructor(private formBuilder:FormBuilder, private stockpriceService:StockpriceService,private router: Router) { }
updateStockPrice(){
 this.stockpriceService.updateStockPrice(this.updatestockPriceForm.value).subscribe(u => {
  alert('StockExchange updated successfully');
 })
}
onSubmit() {
 console.log(this.updatestockPriceForm.value);
 
 this.router.navigate(['/view']);
}
ngOnInit() {
 const id = localStorage.getItem('stockpriceId');
 // alert(id);
 if(+id > 0){
   this.stockpriceService. getStockPriceById(+id).subscribe(ip =>{
     
     this.updatestockPriceForm.patchValue(ip);
   });
 }
 this.updatestockPriceForm=this.formBuilder.group({
   id:[],
   companyCode:['', Validators.required],
   stockExchange:['', Validators.required],
   currentPrice  :['', Validators.required],
   date: ['', Validators.required],
   time:['',Validators.required]
 });
}
}
