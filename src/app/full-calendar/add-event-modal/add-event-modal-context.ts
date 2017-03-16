import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class AddEventModalContext extends BSModalContext {

  constructor() {
    super();
    this.size = 'lg';
    this.showClose = true;
  }
}
