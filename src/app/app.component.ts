import {Component, Inject} from '@angular/core';
import {NOTIFICATION_OPTIONS} from "./shared/notification-option";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private notificationOptions = NOTIFICATION_OPTIONS;
}
