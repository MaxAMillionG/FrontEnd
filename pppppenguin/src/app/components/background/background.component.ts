import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Model/Flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  hiddenGrid: boolean = false;

  constructor(private flightService: FlightService) {
  }

  /**
   * We set the response we get from our API to this array to be displayed
   */
  returnFlightArray: Array<Flight> = [];

  ngOnInit(): void {
    this.hiddenGrid = false;

    /**
     * OnInit/When the page loads, it will automatically load ALL FLIGHTS from the API until user puts in parameters for a search 
     */
    this.flightService.getAllFlights().subscribe(response => {
      this.returnFlightArray = response;
      console.log(response);
    });
  }

  show(): void {
    this.hiddenGrid = !this.hiddenGrid
    console.log(this.hiddenGrid)
  }

  /**
   * Event Binding - This is the method we use when user clicks on the departure dropdown
   * It will translate the value that corresponds with city from the drop down and tell our flight service class this is the city that the user would like to look up
   */
  searchByDeparture(): void {
    let dropdown = <HTMLSelectElement>document.getElementById("departure");
    let departure = Number(dropdown.value);
    this.flightService.getFlightsByDeparture(departure).subscribe(response => {
      this.returnFlightArray = response;
    });
  }

  /**
   * Event Binding - This is the method we use when user clicks on the arrival dropdown
   * It will translate the value that corresponds with city from both drop downs and tell our flight service class this is the departure city and arrival city the user would 
   * like to look up
   */
  searchByDepartureAndArrival(): void {
    let departureDropdown = <HTMLSelectElement>document.getElementById("departure");
    let departure = Number(departureDropdown.value);
    let arrivalDropdown = <HTMLSelectElement>document.getElementById("arrival");
    let arrival = Number(arrivalDropdown.value);
    console.log(departure);
    this.flightService.getFlightsByDepartureAndArrival(departure, arrival).subscribe(response => {
      this.returnFlightArray = response;
    });
  }
}
