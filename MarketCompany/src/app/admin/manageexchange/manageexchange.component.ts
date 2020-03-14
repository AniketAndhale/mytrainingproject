import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from 'src/app/stock.service';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {

  stockForm:FormGroup;
  constructor(private stockservice:StockService,private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.stockForm = this.formBuilder.group({
      id: ['', Validators.required],
      stockexchangename: ['', Validators.required],
      brief:['',Validators.required],
      address: ['',Validators.required],
      remark: ['',Validators.required],
    });
  }

    addStockExchange()
    {
      this.stockservice.saveStockExchange(this.stockForm.value).subscribe(data=>{
        alert('Stock added Successfully.');
      });

  }
}
