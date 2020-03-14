
import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { StockExchange } from 'src/modals/stock';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stocklist',
    templateUrl: './stocklist.component.html',
     styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  constructor(private stockService:StockService,private router:Router) { }

  stock:StockExchange[];

  ngOnInit() {
    this.stockService.getAllStockExchange().subscribe(data=>{
      this.stock=data;
    })
  }

  deleteStockExchange(stock:StockExchange){
    this.stockService.deleteStockExchange(stock.id).subscribe(data=>{
      alert('Stock Deleted successfully');
    })
  }

 c
 
}

