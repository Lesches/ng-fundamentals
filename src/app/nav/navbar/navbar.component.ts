import { Component, OnInit } from '@angular/core';
import { ISession } from 'src/app/events';
import { AuthService } from 'src/app/user/auth.service';
import { EventService } from 'src/app/events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
searchTerm: string = "";
foundSessions: ISession[];
  constructor(public auth:AuthService, private eventService: EventService) {
   
   }

  ngOnInit(): void {
  }
searchSessions(searchTerm) {
this.eventService.searchSessions(searchTerm).subscribe(sessions => {
  this.foundSessions = sessions;
})
}
}
