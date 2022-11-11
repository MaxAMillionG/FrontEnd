import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../Model/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  /**
   * HTTP Get Request - Retrieve ALL Flights from our API
   * @returns - An array of all the Flights from the API
   */
  getAllFlights(): Observable<Array<Flight>> {
    return this.http.get<Array<Flight>>(`https://citiesflightapp.azurewebsites.net/flights`)
  }

  /**
  * HTTP Get Request - Retrieve ALL Flights from our API that exists based on the departure city 
  * @Param departureCityId - id that represents the departure city 
  * @returns - An array of all the Flights from the API that match the parameters provided
  */
  getFlightsByDeparture(departureCityId: number): Observable<Array<Flight>> {
    return this.http.get<Array<Flight>>(`https://citiesflightapp.azurewebsites.net/flights/${departureCityId}`)
  }

  /**
   * HTTP Get Request - Retrieve ALL Flights from our API that exists based on the departure city and the arrival city
   * @param departureCityId - id that represents the departure city
   * @param arrivalCityId - id that represents the arrival city
   * @returns - An array of all the Flights from the API that match the parameters provided
   */
  getFlightsByDepartureAndArrival(departureCityId: number, arrivalCityId: number): Observable<Array<Flight>> {
    return this.http.get<Array<Flight>>(`https://citiesflightapp.azurewebsites.net/flights/${departureCityId}/${arrivalCityId}`)
  }
}
