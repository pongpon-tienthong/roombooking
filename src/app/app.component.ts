import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages/module";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _flashMessagesService: FlashMessagesService) {

  }

  ngOnInit() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
  }
}
