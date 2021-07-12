import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { ToastrService } from './common/toastr.service';
import { CreateEventComponent } from './create-event.component';
import { Error404Component } from './error/404.component';
import { EventAppComponent } from './events-app.component';
import { EventDetailComponent } from './events/event-detail.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventListComponent } from './events/event-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventRouteActivator } from './shared/event-route-activator.service';
import { EventService } from './shared/event.service';
import { EventListResolver } from './shared/events-list-resolver.component';
import {AuthService} from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventAppComponent,
    Error404Component,
    EventDetailsComponent,
    EventListComponent,
    EventDetailComponent,
    NavBarComponent,
    CreateEventComponent
  ],

  providers: [EventService, ToastrService, EventRouteActivator,EventListResolver,AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }],
  //First component call when app starting 
  bootstrap: [EventAppComponent]
})
export class AppModule { }


export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirtyState)
    return window.confirm("You have not saved this event. Do you want to cancel?");
  return true
}