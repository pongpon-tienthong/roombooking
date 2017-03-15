import {Component, AfterViewInit} from '@angular/core';
import { ModalComponent, DialogRef, CloseGuard } from "angular2-modal";
import { AddEventModelContext } from "./add-event-model-context";
declare var $:any;

@Component({
  selector: 'app-add-event-model',
  templateUrl: './add-event-model.component.html',
  styleUrls: ['./add-event-model.component.css']
})
export class AddEventModelComponent implements AfterViewInit, CloseGuard, ModalComponent<AddEventModelContext> {

  public openDialog: boolean;

  constructor(public dialog: DialogRef<AddEventModelContext>) {
    this.openDialog = true;
    dialog.setCloseGuard(this);
  }

  ngAfterViewInit() {
    $(function() {
      $('.datetimepicker').datetimepicker({
        format: 'D/MM/YYYY HH:mm',
        stepping: 15
      });
    });
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


