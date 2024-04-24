import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}

  getBooking(dateString: string) {
    return this.http.get<any>(`http://192.168.102.110:8080/GetBookingAvailableValues?dateFrom=${dateString}&dateTo=${dateString}`);
  }

  postBooking(bookingData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<any>('http://192.168.102.110:8080/make-booking', bookingData, { headers });
  }
}
