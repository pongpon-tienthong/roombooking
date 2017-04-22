import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {ModalModule} from 'angular2-modal';
import {BootstrapModalModule} from 'angular2-modal/plugins/bootstrap';

import {AppComponent} from './app.component';
import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
import {FullCalendarComponent} from './full-calendar/full-calendar.component';
import {AddEventModalComponent} from './full-calendar/add-event-modal/add-event-modal.component';
import {RoomFilterComponent} from './full-calendar/room-filter/room-filter.component';
import {ShowEventModalComponent} from './full-calendar/show-event-modal/show-event-modal.component';
import {ConfirmCancelModalComponent} from './full-calendar/show-event-modal/confirm-cancel-modal.component';
import {SimpleNotificationsModule, NotificationsService} from "angular2-notifications";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FullCalendarComponent,
    AddEventModalComponent,
    RoomFilterComponent,
    ShowEventModalComponent,
    ConfirmCancelModalComponent
  ],
  entryComponents: [
    ShowEventModalComponent,
    AddEventModalComponent,
    ConfirmCancelModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
