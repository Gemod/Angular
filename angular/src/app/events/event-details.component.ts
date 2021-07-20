import { Component, Input, Output,EventEmitter } from "@angular/core";
import { IEvent } from "../shared/event.model";

@Component({
    selector: 'event-details',
    templateUrl:'./event-details.component.html' ,
 //'./event-details.component.html'
styles:[`
  
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

 @Input() event:IEvent 
 @Output() eventClick =  new EventEmitter()

 handleClick(){
     this.eventClick.emit(this.event.name)
 }

 getStartTime(){
     const isEarlyStart = this.event  && this.event.time === '8:00 am';
     return {green : isEarlyStart, bold: isEarlyStart}
     /* in this case we have a lot opportunity to return the classes to apply. fro example
     if (this.event  && this.event.time === '8:00 am')
        return 'green bold' or return ['green','bold']
        return '';
     Remember that css classes can be placed also in styles.css in a root file. 
     in this commit i moved .green class from this component to styles.css
     */
 }
}