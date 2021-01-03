import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, EventService, EventListResolverService, EventRouteActivatorService} from './events/index'
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import {appRoutes} from './routes';
import { ErrorComponent } from './errors/error/error.component';
// import { ProfileComponent } from './user/profile/profile.component';
import { ToasterService } from './common/toaster.service';
import { AuthService } from './user/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
 // ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToasterService,
    EventRouteActivatorService,
    EventListResolverService,
    AuthService,
    {
    provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
  return window.confirm('You did not save your event. Do you really want to cancel?');
  return true;
}
