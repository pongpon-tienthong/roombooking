import {Component, OnInit} from '@angular/core';
import {ModalComponent, CloseGuard, DialogRef} from "angular2-modal";
import {ConfirmCancelModalContext} from "./confirm-cancel-modal-context";
import {EventService} from "../shared/event.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Event} from "../shared/event";

@Component({
  selector: 'app-confirm-cancel-modal',
  templateUrl: 'confirm-cancel-modal.component.html',
  styleUrls: ['confirm-cancel-modal.component.css']
})
export class ConfirmCancelModalComponent implements OnInit, CloseGuard, ModalComponent<ConfirmCancelModalContext> {

  openDialog: boolean;
  form: FormGroup;
  isConfirmEnable: boolean;
  event: Event;

  constructor(public dialog: DialogRef<ConfirmCancelModalContext>,
              protected fb: FormBuilder,
              protected eventService: EventService,
  ) {
  }

  ngOnInit() {
    this.event = this.dialog.context.event;
    this.isConfirmEnable = false;
    this.openDialog = true;
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      cancelReason: ['', Validators.required]
    });
  }

  onConfirmCancel() {
    this.eventService.deleteEvent(this.event.id).subscribe(res => {

      // TODO: return the result here when API is ready
      this.closeDialog();
    });
  }

  closeDialog() {
    this.openDialog = false;
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.openDialog;
  }

}
