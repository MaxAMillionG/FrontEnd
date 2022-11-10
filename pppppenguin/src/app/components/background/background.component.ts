import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  hiddenGrid:boolean = false;

  constructor() { 
    
  }
  returnFlightArray:any = [ ];
  ngOnInit(): void {
    this.hiddenGrid = false;
  }

  show()
  {
    this.hiddenGrid = !this.hiddenGrid 
   
    console.log(this.hiddenGrid)
    
  }
}
