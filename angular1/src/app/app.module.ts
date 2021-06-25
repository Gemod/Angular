import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventAppComponent } from './events-app.component';

@NgModule({
  declarations: [
    EventAppComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  //First component call when app starting 
  bootstrap: [EventAppComponent]
})
export class AppModule { }
