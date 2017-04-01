import {Component, OnInit} from '@angular/core';
import {ModalComponent, CloseGuard, DialogRef} from "angular2-modal";
import {ConfirmCancelModalContext} from "./ConfirmCancelModalContext";

@Component({
  selector: 'app-confirm-cancel-modal',
  templateUrl: 'confirm-cancel-modal.component.html',
  styleUrls: ['confirm-cancel-modal.component.css']
})
export class ConfirmCancelModalComponent implements OnInit, CloseGuard, ModalComponent<ConfirmCancelModalContext> {

  constructor(public dialog: DialogRef<ConfirmCancelModalContext>) {
  }

  ngOnInit() {
  }

}
