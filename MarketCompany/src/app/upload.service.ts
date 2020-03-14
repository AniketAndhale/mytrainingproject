// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UploadService {
//   httpUrl='http://localhost:8005/stockprice/';

//   constructor(private httpClient:HttpClient) { }
//   uploadStocksSheet(formData:FormData):Observable<object>{
//     return this.httpClient.post<object>(this.httpUrl+"uploadStockSheet",formData);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  httpUrl= environment.host + "stock-price-service/stockPrice/"
  constructor(private httpClient: HttpClient) { }
   uploadStocksSheet(formData: FormData): Observable<object>{
     return this.httpClient.post<object>(this.httpUrl+"uploadStockSheet",formData);
   }
  //  getAllStockPrices():Observable<StockPrice[]>{
  //    return 
  //  }
  getCompanyStockPricesBetween(companyCode: string, stockExchange: string, startDate: Date, endDate: Date): Observable<any[]> {
    let url = "companyStockPriceBetween/"+companyCode+"/"+stockExchange+"/"+startDate+"/"+endDate;
    return this.httpClient.get<any[]>(this.httpUrl+url);
  }
}
