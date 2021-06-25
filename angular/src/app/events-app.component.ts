import { Component } from "@angular/core";


@Component({
selector:'event-app',
//use backtrick if you want to put code in multiple lines
template:'<events-list></events-list>'
})

export class EventAppComponent{
    title ='app';
}
