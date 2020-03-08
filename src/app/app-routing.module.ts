import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryMainComponent } from './category-main/category-main.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'category' , component: CategoryMainComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// import { Routes } from '@angular/router'
// import { EventsListComponent } from './events/event-list.component'
// import { EventDetailsComponent } from './events/event-details/event-details.component'
// import { CreateEventComponent } from './events/shared/create-event.component'
// import { Error404Component } from './errors/404.component'
// import { EventRouteActivator } from './events/event-details/event-route-activator.service'
// import { EventListResolver } from './events/events-list-resolver.service'

// export const appRoutes:Routes = [
//     { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
//     { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
//     { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
//     { path: '404', component: Error404Component },
//     { path: '', redirectTo: '/events', pathMatch: 'full' },
//     { path: 'user', loadChildren: './user/user.module#UserModule'}
// ]