import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {overlayConfigFactory} from 'angular2-modal';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {AddEventModalComponent} from './add-event-modal/add-event-modal.component';
import {AddEventModalContext} from "./add-event-modal/add-event-modal-context";
import * as moment from 'moment/moment';
import * as $ from 'jquery';
import {EventService} from "./shared/event.service";
import {Event} from "./shared/event";
import {RoomFilterComponent} from "./room-filter/room-filter.component";
import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";


@Component({
  selector: 'full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
  providers: [Modal, EventService]
})
export class FullCalendarComponent implements OnInit, OnDestroy {

  isRefreshing: boolean = true;
  // events: Event[] = [];
  events: Object[] = [];
  // calendarOptions: Object;
  calendarOptions = {
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
    navLinks: true,
    editable: true,
    eventLimit: true,
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
    events: []
  };

  @ViewChild(RoomFilterComponent) roomFilterComp: RoomFilterComponent;
  @ViewChild(CalendarComponent) fullCalendarComp: CalendarComponent;

  constructor(private modal: Modal,
              private eventService: EventService) {
  }

  ngOnInit() {

    // TODO: remove this when get events is ready
    this.isRefreshing = true;

    // get events
    this.eventService.getEvent().subscribe(events => {

      events.map(event => {
        // this.events.push(new Event(event));
        this.isRefreshing = false;
      });

      // TODO: remove debug log
      // console.log('events', this.events);
    });

    // this.setCalendarOption();

    let newEvents = [
      {
        id: 1,
        title: "All Day Event",
        start: "2017-03-01"
      },
      {
        id: 2,
        title: "Long Event",
        start: "2017-03-07",
        end: "2017-03-10"
      },
      {
        id: 3,
        title: "Repeating Event",
        start: "2017-03-09T13:00:00",
        end: "2017-03-09T16:30:00"
      },
      {
        id: 4,
        title: "Repeating Event",
        start: "2017-03-16T13:00:00",
        end: "2017-03-16T16:30:00"
      },
      {
        id: 5,
        title: "Conference",
        start: "2017-03-11",
        end: "2017-03-13"
      },
      {
        id: 6,
        title: "Conference",
        start: "2017-03-22",
        end: "2017-03-25"
      }
    ];

    // this.calendarOptions.events = this.events;
    // $('angular2-fullcalendar').fullCalendar('renderEvents', newEvents);

    // this.fullCalendarComp.fullCalendar('renderEvents', newEvents);
  }

  // TODO: unsubscribe if necessary
  ngOnDestroy() {
  }

  addEvent() {
    this.modal.open(AddEventModalComponent, overlayConfigFactory({}, AddEventModalContext));
  }

  onEmitRooms(roomIds: number[]) {

    /**
     * show loading icon
     */
    this.isRefreshing = true;

    /**
     * reset evnets
     */
    this.events = [];

    /**
     * disable room filtering buttons
     */
    this.roomFilterComp.doLoading(true);

    this.eventService.getEvent(roomIds).subscribe(events => {

      // TODO: remove dubug
      console.log(roomIds);

      events.map(event => {
        this.events.push(new Event(event));
        this.isRefreshing = false;
      });

      /**
       * enable room filtering buttons
       */
      this.roomFilterComp.doLoading(false);
    });
  }
}
