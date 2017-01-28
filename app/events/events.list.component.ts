import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events.list.component.html'
})

export class EventsListComponent{

    handleEventClick(data){
        console.log('received:', data)
    }

    events: any[]
    constructor(private eventService: EventService){
        this.events = this.eventService.getEvents()
    }
}