import { Component } from '@angular/core';
import { ModalComponent, DialogRef, CloseGuard } from "angular2-modal";
import { BSModalContext } from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-add-event-model',
  templateUrl: './add-event-model.component.html',
  styleUrls: ['./add-event-model.component.css']
})
export class AddEventModelComponent implements CloseGuard, ModalComponent<BSModalContext> {

  public openDialog: boolean;

  constructor(public dialog: DialogRef<BSModalContext>) {
    this.openDialog = true;
    dialog.setCloseGuard(this);
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.openDialog;
  }

  onSubmit() {
    this.openDialog = false;
    this.dialog.close();
  }
}


