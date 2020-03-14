
import { Injectable } from '@angular/core';
import { Company } from 'src/modals/Company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockExchange } from 'src/modals/stock';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class StockService  {
  httpUrl=environment.host + "stock-service/stock/";

  constructor(private httpClient:HttpClient) { }

  saveStockExchange(stock:StockExchange):Observable<StockExchange>{
    return this.httpClient.post<StockExchange>(this.httpUrl, stock);
  
  }

  getAllStockExchange() : Observable<StockExchange[]>{
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }

  getStockExchangeById(id:number):Observable<StockExchange>{
    return this.httpClient.get<StockExchange>(this.httpUrl + id);
  }

  updateStockExchange(stock:StockExchange):Observable<StockExchange>{
    return this.httpClient.put<StockExchange>(this.httpUrl, stock);
  }

  deleteStockExchange(id:number):Observable<StockExchange>{
    return this.httpClient.delete<StockExchange>(this.httpUrl + id);
  }

}
 
