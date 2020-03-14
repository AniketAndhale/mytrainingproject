// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ComparecompanyService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompareCompany } from 'src/modals/comparecompany';

@Injectable({
  providedIn: 'root'
})
export class ComparecompanyService {
  httpUrl='http://localhost:8080/comparecompany/';

  constructor(private httpClient:HttpClient) { }

  saveCompareCompany(comparecompany:CompareCompany):Observable<CompareCompany>{
    return this.httpClient.post<CompareCompany>("http://localhost:8080/comparecompany/", comparecompany);
  }

  getAllCompareCompany() : Observable<CompareCompany[]>{
    return this.httpClient.get<CompareCompany[]>(this.httpUrl);
  }

  getCompareCompanyById(id:number):Observable<CompareCompany>{
    return this.httpClient.get<CompareCompany>(this.httpUrl + id);
  }

  updateCompareCompany(comparecompany:CompareCompany):Observable<CompareCompany>{
    return this.httpClient.put<CompareCompany>(this.httpUrl, comparecompany);
  }

  deleteCompareCompany(id:number):Observable<CompareCompany>{
    return this.httpClient.delete<CompareCompany>(this.httpUrl + id);
  }

}
 
