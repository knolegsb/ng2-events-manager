import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events.list.component.html'
})

export class EventsListComponent implements OnInit {

    handleEventClick(data){
        console.log('received:', data)
    }

    events: any
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute){
        //this.events = this.eventService.getEvents()
    }

    ngOnInit(){
        //this.events = this.eventService.getEvents()
        //this.eventService.getEvents().subscribe(events => { this.events = events }) ===> this is eliminated because resolver is doing the same job.
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
    }
}