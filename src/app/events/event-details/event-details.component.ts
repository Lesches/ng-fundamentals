import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:any;
  constructor(private eventSevice: EventService) { }

  ngOnInit(): void {
this.event = this.eventSevice.getEvent(1)
  }

}
