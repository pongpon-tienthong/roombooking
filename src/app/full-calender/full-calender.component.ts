import { Component, OnInit, AfterViewInit, ViewContainerRef, HostListener } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

declare var $: any;

// TODO: remove this component
@Component({
  selector: 'full-calender',
  templateUrl: './full-calender.component.html',
  styleUrls: ['./full-calender.component.css']
})
export class FullCalenderComponent implements OnInit {

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
  }

  // @HostListener('#calendar:select', ['$event'])
  onTestModel() {

    console.log('onTestModel start');

    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
      .open();

    console.log('onTestModel end');
  }

  ngAfterViewInit() {
    $(document).ready( () => {
      let calender = $('#calendar');
      calender.fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: true,

        // select: (start, end) => {
        //   console.log("===> select");
        //   calender.fullCalendar('unselect');
        // },
      })
    });
  }
}
