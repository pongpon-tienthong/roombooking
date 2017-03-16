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
import { AddEventModelComponent } from './full-calendar/add-event-model/add-event-model.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FullCalendarComponent,
    AddEventModelComponent // TODO: remove this component
  ],
  entryComponents: [
    AddEventModelComponent
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
