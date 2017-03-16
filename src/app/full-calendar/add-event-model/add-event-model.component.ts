import {Component, AfterViewInit, OnInit} from '@angular/core';
import { ModalComponent, DialogRef, CloseGuard } from "angular2-modal";
import { AddEventModelContext } from "./add-event-model-context";
import { FormGroup, FormBuilder } from "@angular/forms";
declare var $:any;

@Component({
  selector: 'app-add-event-model',
  templateUrl: './add-event-model.component.html',
  styleUrls: ['./add-event-model.component.css']
})
export class AddEventModelComponent implements OnInit, AfterViewInit, CloseGuard, ModalComponent<AddEventModelContext> {

  openDialog: boolean;
  form: FormGroup;

  constructor(public dialog: DialogRef<AddEventModelContext>, public fb: FormBuilder) {
  }

  ngOnInit() {
    this.openDialog = true;
    this.dialog.setCloseGuard(this);
    this.buildForm();
  }

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
        stepping: 15
      });
    });
  }

  setDateValue(key: string, value: string) {
    this.form.get(`event.${key}`).setValue(value);
  }

  // TODO: close modal when press ESC
  // @HostListener('window:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   event.keyCode == 27 && this.closeDialog();
  // }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.openDialog;
  }

  onSubmit() {
    this.closeDialog();
  }

  closeDialog() {
    this.openDialog = false;
    this.dialog.close();
  }

}


