import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events.list.component.html'
})

export class EventsListComponent implements OnInit {

    handleEventClick(data){
        console.log('received:', data)
    }

    events: any[]
    constructor(private eventService: EventService){
        //this.events = this.eventService.getEvents()
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}