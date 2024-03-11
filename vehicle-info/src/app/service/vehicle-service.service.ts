import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  private apiUrl = 'octalogic-test-frontend.vercel.app/api/v1';

  constructor(private http: HttpClient) { }

  getVehicleTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vehicleTypes`);
  }

  getVehicleDetails(vehicleId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vehicles/${vehicleId}`);
  }

  getBookingDates(vehicleId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bookings/${vehicleId}`);
  }
}
