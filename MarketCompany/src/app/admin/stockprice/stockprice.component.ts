import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StockpriceService } from 'src/app/stockprice.service';

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})

export class StockpriceComponent implements OnInit {
  stockpriceForm:FormGroup;
  constructor(private stockpriceservice:StockpriceService , private formBuilder:FormBuilder,private router :Router) { }

  ngOnInit() {

    this.stockpriceForm = this.formBuilder.group({
      id: ['', Validators.required],
      companyCode: ['', Validators.required],
      stockExchange: ['',Validators.required],
      currentPrice:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required]
     
    });
  }

  addStockPrice()
    {
      
      this.stockpriceservice.saveStockPrice(this.stockpriceForm.value).subscribe(data=>{
        alert('Stock price added Successfully.');
      
        
      });
  }
}
