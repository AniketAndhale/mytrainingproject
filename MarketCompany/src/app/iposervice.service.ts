
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPO } from 'src/modals/ipo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IposerviceService {
  httpUrl=environment.host + "initial-public-offer-service/ipo/";

  constructor(private httpClient:HttpClient) { }

  saveIpo(ipo:IPO):Observable<IPO>{
    return this.httpClient.post<IPO>(this.httpUrl, ipo);
  }

  getAllIPO() : Observable<IPO[]>{
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }

  getIPOById(id:number):Observable<IPO>{
    return this.httpClient.get<IPO>(this.httpUrl + id);
  }

  updateIPO(ipo:IPO):Observable<IPO>{
    return this.httpClient.put<IPO>(this.httpUrl, ipo);
  }

  deleteIPO(id:number):Observable<IPO>{
    return this.httpClient.delete<IPO>(this.httpUrl + id);
  }

}
 
