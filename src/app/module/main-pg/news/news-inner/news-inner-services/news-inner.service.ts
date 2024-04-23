import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsInnerService {
  constructor(private http: HttpClient) {}

  getNewsInner(id: number) {
    return this.http.get<any>(`http://192.168.102.110:8080/GetDataFromTable/${id}`);
  }
}
