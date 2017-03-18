import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';

// TODO: remove this component
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { AddEventModalComponent } from './full-calendar/add-event-modal/add-event-modal.component';
import { RoomFilterComponent } from './full-calendar/room-filter/room-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FullCalendarComponent,
    AddEventModalComponent,
    RoomFilterComponent // TODO: remove this component
  ],
  entryComponents: [
    AddEventModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
