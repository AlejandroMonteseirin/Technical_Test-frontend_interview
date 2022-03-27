import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi="https://chroniclingamerica.loc.gov/search/titles/results/?format=json"

  constructor(public http: HttpClient) { }




  apiCall(filter:string,page:number){
    let query="";
    if(filter){
      query="&terms="+filter;
    }
    return this.http.get(this.urlApi + query + "&page="+page);
  }
}
