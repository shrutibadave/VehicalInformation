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
      {
        id: '20365c4c-2606-4e1b-a613-7866212a86V1',
        title: 'JCP',
        wheels: 2,
        type: 'bike',
        vehicles: [
          {
            id: '31765c4c-2606-4e1b-a613-7866212a86b6',
            name: 'honda',
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
  getHardcodedVehicleData(): Vehicle[] {

    const data: Vehicle[] = [
      {
        id: '31765c4c-2606-4e1b-a613-7866212a86b6',
        name: 'Ford',
        image: {
          key: 'https://picsum.photos/200',
          publicURL:
            'https://pwhnqzhovvprdcsenlep.supabase.co/storage/v1/object/public/frontend-assets/vehicles/force_motors.jpg',
        },
        createdAt: '2019-10-14T07:47:09.376Z',
        updatedAt: '2019-10-15T07:47:09.376Z',
      },
    ];

    return data;

  }
  getBookings(): Booking[] {
    const bookings: Booking[] = [
      {
        id: '31765c4c-2606-4e1b-a613-7866212a86b6',
        startDate: '2024-03-14T07:47:09.376Z',
        endDate: '2024-03-16T07:47:09.376Z',
        createdAt: '2019-10-13T07:47:09.376Z',
        updatedAt: '2019-10-14T07:47:09.376Z',
      },
    ];
    return (bookings);
  }
  setSessionstorage(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  getSessionstorage(key: string): any {
    try {


      let data = sessionStorage.getItem(key);
      if (data)
        return JSON.parse(data)
    } catch (error) {
      return undefined;
    }

  }
  removeSessionstorage(key: string) {
    sessionStorage.removeItem(key);
  }
  getVehicleDataBasedOnId(id: string): Vehicle {
    let vehicleInfo = this.getHardcodedVehicleData();
    return vehicleInfo.filter(item => item.id == id)[0];
  }
  getVehicleBookingBasedOnId(id: string): Booking {
    let vehicleInfo = this.getBookings();
    return vehicleInfo.filter(item => item.id == id)[0];
  }

}
