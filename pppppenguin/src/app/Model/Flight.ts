import { Time } from "@angular/common";

export interface Flight {
    id: number;
    
    airline: {
        id: number;
        airline: string;
    }

    depatureCity: {
        id: string;
        cityName: string;
    }
   
    departureTime: Time

    arrivalCity: {
        id: string;
        cityName: string;
    }
   
    arrivalTime: Time;
}