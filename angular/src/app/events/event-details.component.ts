import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'event-details',
    template:
    ` 
<div>
    <div class="row">
        <div class="col-md-11">
            <h2>{{event?.name}} </h2>
        </div>

    <div class="row">
        <div class="col-md-2">
            <div><strong>Date:</strong> {{event?.date}}</div>
            <div><strong>Time:</strong> {{event?.time}}</div>
            <div><strong>Price:</strong> \${{event?.price}}</div>
        </div>
        <div class="col-md-2">
            <address>
                <strong>Address:</strong><br />
                {{event?.location?.address}}<br />
                {{event?.location?.city}}, {{event?.location?.country}}
            </address>
        </div>
    </div>
  <!--  <button class="btn btn-primary" (click)="handleClick()">Click here for {{event?.name}} event</button>-->
</div>` 
 //'./event-details.component.html'
})

export class EventDetailsComponent {

 @Input() event:any 
 @Output() eventClick =  new EventEmitter()

 handleClick(){
     this.eventClick.emit(this.event.name)
 }

 logSomething(){
     console.log("i'm inner child component...!");
 }
}