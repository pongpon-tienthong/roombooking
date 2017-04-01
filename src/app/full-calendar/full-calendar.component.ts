import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {overlayConfigFactory} from 'angular2-modal';
import {Modal} from 'angular2-modal/plugins/bootstrap';
import {AddEventModalComponent} from './add-event-modal/add-event-modal.component';
import {AddEventModalContext} from "./add-event-modal/add-event-modal-context";
import * as moment from 'moment/moment';
import {EventService} from "./shared/event.service";
import {Event} from "./shared/event";
import {RoomFilterComponent} from "./room-filter/room-filter.component";
import {CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
import {ShowEventModalContext} from "./show-event-modal/show-event-modal-context";
import {ShowEventModalComponent} from "./show-event-modal/show-event-modal.component";


@Component({
  selector: 'full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css'],
  providers: [Modal, EventService]
})
export class FullCalendarComponent implements OnInit, OnDestroy {

  isFullCalendarLoading: boolean = true;
  events: Event[] = [];
  calendarOptions: Object;

  @ViewChild(RoomFilterComponent) roomFilter: RoomFilterComponent;
  @ViewChild(CalendarComponent) fullCalendar: CalendarComponent;

  constructor(private modal: Modal,
              private eventService: EventService) {
  }

  ngOnInit() {

    /**
     * init calendar option
     */
    this.setCalendarOption();

    /**
     * show loading
     */
    this.isFullCalendarLoading = true;

    /**
     * get events from api
     */
    this.eventService.getEvent().subscribe(events => {

      events.map(event => {
        this.events.push(new Event(event));
      });

      /**
       * update calendar
       */
      this.fullCalendar.fullCalendar('renderEvents', this.events, true);

      /**
       * stop loading
       */
      this.isFullCalendarLoading = false;
    });
  }

  // TODO: unsubscribe if necessary
  ngOnDestroy() {
  }

  setCalendarOption() {
    this.calendarOptions = {
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
      eventClick: (event) => {
        this.showEvent(event);
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
  }

  addEvent() {
    this.modal.open(AddEventModalComponent, overlayConfigFactory({}, AddEventModalContext));
  }

  showEvent(event: Event) {

    console.log('event on fullcalendar', event);

    this.modal.open(ShowEventModalComponent, overlayConfigFactory({event}, ShowEventModalContext));
  }

  onEmitRooms(roomIds: number[]) {

    /**
     * show loading icon
     */
    this.isFullCalendarLoading = true;

    /**
     * reset evnets
     */
    this.events = [];

    /**
     * disable room filtering buttons
     */
    this.roomFilter.doLoading(true);

    this.eventService.getEvent(roomIds).subscribe(events => {

      this.events = [];

      events.map(event => {
        this.events.push(new Event(event));
      });

      /**
       * clear old events
       */
      this.fullCalendar.fullCalendar( 'removeEventSources');

      /**
       * update calendar
       */
      this.fullCalendar.fullCalendar('renderEvents', this.events, true);

      /**
       * stop loading
       */
      this.isFullCalendarLoading = false;

      /**
       * enable room filtering buttons
       */
      this.roomFilter.doLoading(false);
    });
  }
}
