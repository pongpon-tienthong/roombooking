import { Component, OnInit } from '@angular/core';
import { overlayConfigFactory } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { RoomFilterComponent } from './room-filter/room-filter.component';
import { AddEventModalComponent } from './add-event-modal/add-event-modal.component';
import { AddEventModalContext } from "./add-event-modal/add-event-modal-context";
import * as moment from 'moment/moment';


@Component({
  selector: 'full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
  providers: [Modal]
})
export class FullCalendarComponent implements OnInit {

  constructor(public modal: Modal) {
  }

  ngOnInit() {
    console.log('Moment', moment().add(100, 'years').format('YYYY-MM-DD'));
  }

  calendarOptions: Object = {
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,listWeek,agendaDay'
    },
    buttonText: {
      today: 'Today',
      month: 'Month',
      week: 'Week',
      listWeek: 'List',
      day: 'Day'
    },
    contentHeight: 530,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    selectable: true,
    select: (start, end) => {
      this.addEvent();
    },
    eventClick: (calEvent, jsEvent, view) => {
      console.log("Click Event!!!");
    },
    selectConstraint: {
      start: moment().format('YYYY-MM-DD'),
      end: moment().add(100, 'years').format('YYYY-MM-DD')
    },
    eventConstraint: {
      start: moment().format('YYYY-MM-DD'),
      end: moment().add(100, 'years').format('YYYY-MM-DD')
    },
    events: [
      {
        title: 'All Day Event',
        start: '2017-02-01'
      },
      {
        title: 'Long Event',
        start: '2017-02-07',
        end: '2017-02-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-02-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-02-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2017-02-11',
        end: '2017-02-13'
      },
      {
        title: 'Meeting',
        start: '2017-02-12T10:30:00',
        end: '2017-02-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2017-02-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2017-02-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2017-02-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2017-02-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2017-02-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2017-02-28'
      }
    ]
  };

  addEvent() {
    this.modal.open(AddEventModalComponent,  overlayConfigFactory({}, AddEventModalContext));
  }

  onEmitRooms(roomIds: number[]) {
    console.log(roomIds);
  }
}
