import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockPrice } from 'src/modals/stockprice';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {
  httpUrl= environment.host + "stock-price-service/stockprice"
 

  constructor(private httpClient:HttpClient) { }

  saveStockPrice(stockprice:StockPrice):Observable<StockPrice>{
    return this.httpClient.post<StockPrice>(environment.host + "stock-price-service/stockprice", stockprice);
  
  }

  getAllStocPrice() : Observable<StockPrice[]>{
    return this.httpClient.get<StockPrice[]>(this.httpUrl);
  }

  getStockPriceById(id:number):Observable<StockPrice>{
    return this.httpClient.get<StockPrice>(this.httpUrl + id);
  }

  updateStockPrice(stockprice:StockPrice):Observable<StockPrice>{
    return this.httpClient.put<StockPrice>(this.httpUrl, stockprice);
  }

  deleteStockPrice(id:number):Observable<StockPrice>{
    return this.httpClient.delete<StockPrice>(this.httpUrl + id);
  }

}
 
