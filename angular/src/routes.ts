import { Routes } from '@angular/router';
import { CreateEventComponent } from './app/create-event.component';
import { Error404Component } from './app/error/404.component';
import { EventDetailComponent } from './app/events/event-detail.component';
import { EventListComponent } from './app/events/event-list.component';
import { EventRouteActivator } from './app/shared/event-route-activator.service';
import { EventListResolver } from './app/shared/events-list-resolver.component';

export const appRoutes: Routes = [
    { path: '404', component: Error404Component },
    { path: 'events/new', component: CreateEventComponent,canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailComponent,canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },

    {path:'user',loadChildren:()=>import('./app/user/user.module').then(m=>m.UserModule)}


]