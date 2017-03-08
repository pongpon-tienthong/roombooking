import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';

// TODO: remove this component
import { FullCalenderComponent } from './full-calender/full-calender.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCalenderComponent // TODO: remove this component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
