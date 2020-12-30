import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:IEvent;
  constructor(private eventSevice: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
this.event = this.eventSevice.getEvent(+this.route.snapshot.params['id']);
  }

}
