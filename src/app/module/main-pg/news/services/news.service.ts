import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor( private http:HttpClient) {}
  
  getNews(){
    return this.http.get<any>(`http://192.168.102.110:8080/GetDataFromTable`);
  }
}
