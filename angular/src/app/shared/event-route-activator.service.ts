import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventService } from "./event.service";

@Injectable({
    providedIn: 'root'
})
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const exists = !!this.eventService.getEvent(+route.params['id'])


        if (!exists)
            this.router.navigate(['/404'])
        return exists
    }

}