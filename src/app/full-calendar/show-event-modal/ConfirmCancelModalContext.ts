import {EventModalContext} from "../shared/event-modal-context";

export class ConfirmCancelModalContext extends EventModalContext {

  constructor() {
    super();
    this.dialogClass = 'modal-dialog custom-dialog box box-danger';
    this.size = 'lg';
    this.showClose = true;
  }
}
