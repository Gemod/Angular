import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import { EventAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/event-details.component';
import { EventListComponent } from './events/event-list.component';
import { NavBarComponent } from './nav/mavbar.component';
import { EventService } from './shared/event.service';

@NgModule({
  declarations: [
    EventAppComponent,
    EventDetailsComponent,
    EventListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [EventService,ToastrService],
  //First component call when app starting 
  bootstrap: [EventAppComponent]
})
export class AppModule { }
