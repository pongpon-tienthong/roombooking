import {Component, OnInit} from '@angular/core';
import {ModalComponent, CloseGuard, DialogRef} from "angular2-modal";
import {ConfirmCancelModalContext} from "./confirm-cancel-modal-context";
import {EventService} from "../shared/event.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-confirm-cancel-modal',
  templateUrl: 'confirm-cancel-modal.component.html',
  styleUrls: ['confirm-cancel-modal.component.css']
})
export class ConfirmCancelModalComponent implements OnInit, CloseGuard, ModalComponent<ConfirmCancelModalContext> {

  openDialog: boolean;
  form: FormGroup;
  isConfirmEnable: boolean;

  constructor(public dialog: DialogRef<ConfirmCancelModalContext>,
              protected fb: FormBuilder) {
  }

  ngOnInit() {
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
