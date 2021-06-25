import { Component} from "@angular/core";

@Component({
    selector:'event-details',
    template:
    `
    <div>
    <h1>Event details component</h1>
  
    <div style="margin-top:30px">
      Event: {{event.name}}
    </div>
    <div>
      Date: {{event.date}}
    </div>
    <div>
      Time: {{event.time}}
    </div>
    <div>
      Price: \€{{event.price}}
    </div>
    <div>
      Address: {{event.location.address}}, {{event.location.city}}, {{event.location.country}}
      </div>
  </div>
    
    `
})

export class EventDetailsComponent{
    event =
      {
         name:'ngConf 2025',
          date: '3/1/2025',
           time: '8am',
           price : '124',
            location:
             {
                 address: '123 Main St',
                  city: 'Salt Lake City, UT',
                   country: 'USA'
            }
        }
}