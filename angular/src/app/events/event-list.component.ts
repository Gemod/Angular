import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { IEvent } from "../shared/event.model";
import { EventService } from "../shared/event.service";

@Component({
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

  events:IEvent[]
  constructor(private eventService : EventService, private toastrService: ToastrService,
    private route:ActivatedRoute){
  
  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }
  handleEventClicked(data) {
    console.log(data)
  }
  handleDetailsClick(eventName){
    this.toastrService.success(eventName);
  }


}