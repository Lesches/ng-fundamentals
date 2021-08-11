import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, EventService, EventListResolverService, EventRouteActivatorService, SessionListComponent, CreateSessionComponent, DurationPipe} from './events/index'
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import {appRoutes} from './routes';
import { ErrorComponent } from './errors/error/error.component';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent} from './common/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import {ModalTrigerDirective} from './common/modalTrigger.directive'
//

let toastr:Toastr = window['toaster']
let jQuery = window['$']


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
    DurationPipe,
    SimpleModalComponent,
    ModalTrigerDirective
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
    {provide: JQ_TOKEN, useValue: jQuery},
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
