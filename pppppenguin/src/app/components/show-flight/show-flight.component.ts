import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/Model/Flight';
import { TimePipe } from 'src/app/pipes/time.pipe';

@Component({
  selector: 'app-show-flight',
  templateUrl: './show-flight.component.html',
  styleUrls: ['./show-flight.component.css'],
  providers: [TimePipe]
})
export class ShowFlightComponent implements OnInit {

  @Input()
  flights: Flight = {
    id: 0,
    airline: {
      id: 0,
      airline: ''
    },
    depatureCity: {
      id: '',
      cityName: ''
    },
    departureTime: {
      hours: 0,
      minutes: 0
    },
    arrivalCity: {
      id: '',
      cityName: ''
    },
    arrivalTime: {
      hours: 0,
      minutes: 0
    }
  }


  constructor(private time: TimePipe) { }

  ngOnInit(): void {

  }

}
