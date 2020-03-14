import { Component, OnInit } from '@angular/core';
import { StockPrice } from 'src/modals/stockprice';
import { StockpriceService } from 'src/app/stockprice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {

  stockprice : StockPrice[];
  constructor(private stockpriceService :StockpriceService, private router : Router) { }

  ngOnInit() {
    this.stockpriceService.getAllStocPrice().subscribe(data => {
      this.stockprice=data;

    });


  }
  deleteStockPrice(stockprice:StockPrice){
    this.stockpriceService.deleteStockPrice(stockprice.id).subscribe();
    this.stockprice=this.stockprice.filter(i=> i !== stockprice);
    alert("Stockprice Data deleted.");
  }

  
  updateStockPrice(stockprice:StockPrice){

   localStorage.removeItem("stockpriceID");
   localStorage.setItem("stockpriceID",stockprice.id.toString());
   this.router.navigate(['update-stockprice']);
   
 }

}
