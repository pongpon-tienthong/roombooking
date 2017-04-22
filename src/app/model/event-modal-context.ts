import {BSModalContext} from 'angular2-modal/plugins/bootstrap';

export class EventModalContext extends BSModalContext {
  constructor() {
    super();
    this.dialogClass = 'modal-dialog custom-dialog box box-primary';
    this.size = 'lg';
    this.showClose = true;
  }
}
