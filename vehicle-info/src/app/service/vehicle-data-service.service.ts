import { Injectable } from '@angular/core';
import { Booking, Vehicle, VehicleType } from '../model/vehicle.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataServiceService {

  constructor() { }
  getVehicleTypes(): VehicleType[] {
    // Hard-coded data
    const data: VehicleType[] = [
      {
        id: '31765c4c-2606-4e1b-a613-7866212a86b6',
        title: 'Truck',
        wheels: 4,
        type: 'car',
        vehicles: [
          {
            id: '31765c4c-2606-4e1b-a613-7866212a86b6',
            name: 'Ford',
            createdAt: '2019-10-13T07:47:09.376Z',
            updatedAt: '2019-10-13T07:47:09.376Z',
          },
        ],
        createdAt: '2019-10-13T07:47:09.376Z',
        updatedAt: '2019-10-13T07:47:09.376Z',
      },
    ];

    return data;
  }
  getHardcodedVehicleData(): Vehicle {
    return {
      id: '31765c4c-2606-4e1b-a613-7866212a86b6',
      name: 'Ford',
      image: {
        key: 'vehicles/force_motors.jpg',
        publicURL:
          'https://pwhnqzhovvprdcsenlep.supabase.co/storage/v1/object/public/frontend-assets/vehicles/force_motors.jpg',
      },
      createdAt: '2019-10-13T07:47:09.376Z',
      updatedAt: '2019-10-13T07:47:09.376Z',
    };
  }
  getBookings(): Observable<Booking[]> {
    const bookings: Booking[] = [
      {
        id: '31765c4c-2606-4e1b-a613-7866212a86b6',
        startDate: '2019-10-13T07:47:09.376Z',
        endDate: '2019-10-13T07:47:09.376Z',
        createdAt: '2019-10-13T07:47:09.376Z',
        updatedAt: '2019-10-13T07:47:09.376Z',
      },
    ];
    return of(bookings);
  }
}
