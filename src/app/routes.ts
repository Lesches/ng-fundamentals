import {Routes} from '@angular/router';
import {EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, EventService, EventListResolverService, EventRouteActivatorService, CreateSessionComponent} from './events/index'
import { ErrorComponent } from './errors/error/error.component';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: ErrorComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
   // {path: 'user', loadChildren: './user/user.module#UserModule'}
   {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
// https://www.techiediaries.com/angular-lazy-load-module-example/
]