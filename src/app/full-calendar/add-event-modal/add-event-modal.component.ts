import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ModalComponent, DialogRef, CloseGuard } from "angular2-modal";
import { AddEventModalContext } from "./add-event-modal-context";
import { FormGroup, FormBuilder } from "@angular/forms";
import { EventService } from "../shared/event.service";
declare var $:any;

@Component({
  selector: 'app-add-event-model',
  templateUrl: 'add-event-modal.component.html',
  styleUrls: ['add-event-modal.component.css'],
  providers: [EventService]
})
export class AddEventModalComponent implements OnInit, AfterViewInit, CloseGuard, ModalComponent<AddEventModalContext> {

  openDialog: boolean;
  form: FormGroup;
  addEvent: Event;

  constructor(
    public dialog: DialogRef<AddEventModalContext>,
    private fb: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.openDialog = true;
    this.dialog.setCloseGuard(this);
    this.buildForm();
  }

  // TODO: Add form validation and validation effect
  buildForm(): void {
    this.form = this.fb.group({
      event: this.fb.group({
        eventTitle: '',
        eventLocationId: '',
        eventLayoutStyle: '',
        eventStart: '',
        eventEnd: '',
        eventAllDay: false,
        eventDescription: ''
      }),
      contact: this.fb.group({
        contactName: '',
        contactNo: '',
        contactEmail: '',
        sendEmail: false
      }),
      repeat: this.fb.group({
        repeat: 'none',
        repeatNo: ''
      })
    });
  }

  ngAfterViewInit() {
    $(function() {
      $('.datetimepicker').datetimepicker({
        format: 'DD/MM/YYYY HH:mm',
        stepping: 30
      });
    });
  }

  setDateValue(key: string, value: string) {
    this.form.get(`event.${key}`).setValue(value);
  }

  // TODO: close modal when press ESC
  // @HostListener('window:keydown', ['$addEvent'])
  // handleKeyboardEvent(addEvent: KeyboardEvent) {
  //   addEvent.keyCode == 27 && this.closeDialog();
  // }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.openDialog;
  }

  // TODO: Add loading animation and dialog for responses (success and err)
  onSubmit() {
    this.eventService.addEvent().subscribe(
      res => {
        this.addEvent = res;
      }
    );

    this.closeDialog();
  }

  closeDialog() {
    this.openDialog = false;
    this.dialog.close();
  }

}


