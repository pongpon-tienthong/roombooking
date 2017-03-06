import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

// TODO: remove this component
@Component({
  selector: 'full-calender',
  templateUrl: './full-calender.component.html',
  styleUrls: ['./full-calender.component.css']
})
export class FullCalenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      $('#calendar').fullCalendar({
        // put your options and callbacks here
      })
    });
  }
}
