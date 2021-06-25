import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/event-details.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  //First component call when app starting 
  bootstrap: [EventAppComponent]
})
export class AppModule { }
