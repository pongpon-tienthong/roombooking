import {EventModalContext} from "../../model/event-modal-context";
import {Event} from "../../model/event";

export class ConfirmCancelModalContext extends EventModalContext {

  public event: Event;

  constructor() {
    super();
    this.dialogClass = 'modal-dialog custom-dialog box box-danger';
    this.size = 'lg';
    this.showClose = true;
  }
}
