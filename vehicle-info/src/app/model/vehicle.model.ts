export class VehicleType {
    id: string;
    title: string;
    wheels: number;
    type: string;
    vehicles: Vehicle[];
    createdAt: string;
    updatedAt: string;
}

export class Vehicle {
    id: string;
    name: string;
    createdAt: string;
    image?: VehicleImage;
    updatedAt: string;
}
export interface VehicleImage {
    key: string;
    publicURL: string;
}
export interface Booking {
    id: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
  }
  
