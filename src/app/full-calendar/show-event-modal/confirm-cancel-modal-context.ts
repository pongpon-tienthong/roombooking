import {EventModalContext} from "../shared/event-modal-context";
import {Event} from "../shared/event";

export class ConfirmCancelModalContext extends EventModalContext {

  public event: Event;

  constructor() {
    super();
    this.dialogClass = 'modal-dialog custom-dialog box box-danger';
    this.size = 'lg';
    this.showClose = true;
  }
}
