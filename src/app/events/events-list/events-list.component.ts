import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToasterService } from 'src/app/common/toaster.service';
import { ActivatedRoute } from '@angular/router';

declare let toastr:any;

@Component({
// selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
events: any;

handleThumbnailClick(eventName:any) {
  this.toastr.success(eventName);
}

 constructor(private eventService: EventService, private toastr: ToasterService, private route: ActivatedRoute) {
   
  }

  ngOnInit() {
  this.events = this.route.snapshot.data['events'];
  } 

}
