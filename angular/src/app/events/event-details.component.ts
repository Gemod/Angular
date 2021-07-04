import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'event-details',
    template:
    ` 
<div class="well details" >
    <div class="row">
        <div class="col-md-11">
            <h2>{{event.name}} </h2>
        </div>

    <div class="row">
        <div class="col-md-2">
            <div><strong>Date:</strong> {{event.date}}</div>
            <div>
                <strong>Time:</strong> {{event.time}}</div>
                <div [ngClass]="{green: event?.time === '8:00 am', bold : event?.time === '8:00 am'}" 
                [ngSwitch] ="event?.time">
                    <span *ngSwitchCase="'8:00 am'"> (Early Start) </span>
                    <span *ngSwitchCase="'10:00 am'"> (Late Start) </span>
                    <span *ngSwitchDefault>Normal Start</span>
                </div>
            
            </div>
            <div><strong>Price:</strong> \${{event?.price}}</div>
        </div>
        <div class="col-md-2">
            <address *ngIf="event?.location">
                <strong>Address:</strong><br />
                {{event?.location?.address}}<br />
                {{event?.location?.city}}, {{event?.location?.country}}
            </address>
        </div>
        <div class="col-md-2">
            <div [hidden]="!event?.onlineUrl">
                <div><strong>URL :</strong></div>
                <div>{{event?.onlineUrl}}</div>
            </div>
        </div>
    </div>
    <button class="btn btn-primary" (click)="handleClick()">Click here for {{event.name}} event</button>
</div>` ,
 //'./event-details.component.html'
styles:[`
    .green {color:#003300 !important;}
    .bold { font-weight : bold;}
    .pad-left{margin-left:10px;}

    .well div {color:#bbb;}
`]
//every class with "well" string in a class property angular will apply the class
//Be careful that every component styles property will not be apply in child or parent component but only where styles is declare.
//this is angular's built-in view encapsulation
//When you use a []binding to hidden element of course is present into DOM. If you inspect page you can find URL's div
})

export class EventDetailsComponent {

 @Input() event:any 
 @Output() eventClick =  new EventEmitter()

 handleClick(){
     this.eventClick.emit(this.event.name)
 }
}