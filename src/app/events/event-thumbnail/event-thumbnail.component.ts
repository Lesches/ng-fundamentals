import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
@Input() event:any;


getStartTimeStyle():any {
  if (this.event && this.event.time === '8:00 am')
  return {color:  '#030', 'font-weight':  'bold'}
  return {};
}

  constructor() { }

  ngOnInit(): void {
  }

}
