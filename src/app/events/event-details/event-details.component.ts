import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event:IEvent;
addMode:boolean
filterBy:string = 'all'
  constructor(private eventSevice: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
this.event = this.eventSevice.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true
  }
  
  saveNewSession(session:ISession) {
const nextId = Math.max.apply(null, this.event.sessions.map(s => 
s.id));
session.id = nextId + 1
this.event.sessions.push(session)
this.eventSevice.updateEvent(this.event)
this.addMode = false
}

cancelAddSession(){
  this.addMode = false
}
  }

