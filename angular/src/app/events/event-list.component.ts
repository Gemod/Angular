import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "../shared/event.service";

@Component({
  selector: 'events-list',
  template:
    `
        <div>
            <h1> Events : </h1>
            <div class="col-md-5"  *ngFor="let event of events">
              <event-details #details (click)="handleDetailsClick(event.name)" (eventClick)="handleEventClicked($event)"  [event]="event"  ></event-details>
            </div>
        </div>
    `

})

export class EventListComponent implements OnInit{

  events:any[]
  constructor(private eventService : EventService, private toastrService: ToastrService){
  
  }

  ngOnInit(){
    this.events = this. eventService.getEvents()
  }
  handleEventClicked(data) {
    console.log(data)
  }
  handleDetailsClick(eventName){
    this.toastrService.success(eventName);
  }


}