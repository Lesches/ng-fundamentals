import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
event1 = {
  id: 1,
  name: 'Angular Contact',
  date: '13/6/2020',
  time: '10:00 AM',
  price: 599.99,
  imageUrl: '/assets/images/angularconnect-sheild.png',
  location: {
    address: '1057 DT',
    city: 'London',
    country: 'England'
  }
} 


  constructor() { }

  ngOnInit(): void {
  }

}
