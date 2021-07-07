import { Component } from "@angular/core";


@Component({
selector:'event-app',
//use backtrick if you want to put code in multiple lines
template:`
<nav-bar></nav-bar>
<router-outlet></router-outlet>
`
})

export class EventAppComponent{
    title ='app';
}
