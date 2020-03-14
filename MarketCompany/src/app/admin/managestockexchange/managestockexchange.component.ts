import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/stock.service';
import { StockExchange } from 'src/modals/stock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managestockexchange',
  templateUrl: './managestockexchange.component.html',
  styleUrls: ['./managestockexchange.component.css']
})
export class ManagestockexchangeComponent implements OnInit {

  constructor(private stockService:StockService,private router:Router) { }

  stock:StockExchange[];

  ngOnInit() {
    this.stockService.getAllStockExchange().subscribe(data=>{
      this.stock=data;
    })
  }

  deleteStockExchange(stock:StockExchange){
    this.stockService.deleteStockExchange(stock.id).subscribe();
    this.stock=this.stock.filter(i=> i !== stock)
      alert('Stock Deleted successfully');
    
  }


  updateStockExchange(id:number){
    localStorage.removeItem('stockId');
    localStorage.setItem('stockId',id.toString());
    this.router.navigate(['update-stock']);
  }

 
}

