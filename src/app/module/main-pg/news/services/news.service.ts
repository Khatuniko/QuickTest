import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}
  
  getNews() {
    return this.http.get<any>('http://192.168.102.110:8080/GetDataFromTable').pipe(
      map(newsItems => {
        return newsItems.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      })
    );
  }
}
