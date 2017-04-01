import {Component} from '@angular/core';
import {DialogRef} from "angular2-modal";
import {ShowEventModalContext} from "./show-event-modal-context";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EventService} from "../shared/event.service";
import {AddEventModalComponent} from "../add-event-modal/add-event-modal.component";
import {Event} from "../shared/event";

@Component({
  selector: 'app-show-event-modal',
  templateUrl: './show-event-modal.component.html',
  styleUrls: ['./show-event-modal.component.css']
})
export class ShowEventModalComponent extends AddEventModalComponent {

  openDialog: boolean;
  context: ShowEventModalContext;
  form: FormGroup;
  event: Event;
  isDisabled: boolean = true;

  constructor(public dialog: DialogRef<ShowEventModalContext>,
              protected fb: FormBuilder,
              protected eventService: EventService) {
    super(dialog, fb, eventService);
  }

  ngOnInit() {
    this.context = this.dialog.context;
    this.event = this.context.event;
    this.openDialog = true;

    this.dialog.setCloseGuard(this);
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      event: this.fb.group({
        eventTitle: this.event.title,
        eventLocationId: this.event.locationId,
        eventLayoutStyle: this.event.layout,
        eventStart: this.event.start,
        eventEnd: this.event.end,
        eventAllDay: this.event.allDay,
        eventDescription: this.event.description
      }),
      contact: this.fb.group({
        contactName: this.event.contactName,
        contactNo: this.event.contactNumber,
        contactEmail: this.event.contactEmail,
        sendEmail: this.event.sendEmail
      }),
      repeat: this.fb.group({
        repeat: this.event.repeat,
        repeatNo: this.event.repeatNumber
      })
    });
  }

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

  deleteEvent(): void {
    console.log('delete!');
    this.closeDialog();
  }
}
