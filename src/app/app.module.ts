import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, EventService, EventListResolverService, EventRouteActivatorService, SessionListComponent, CreateSessionComponent, DurationPipe} from './events/index'
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import {appRoutes} from './routes';
import { ErrorComponent } from './errors/error/error.component';
import { TOASTR_TOKEN, Toastr } from './common/toaster.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';

declare let toastr:Toastr


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
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
