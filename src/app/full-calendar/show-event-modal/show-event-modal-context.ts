import {BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {Event} from "../shared/event";

export class ShowEventModalContext extends BSModalContext {

  public event: Event;

  constructor() {
    super();
    this.size = 'lg';
    this.showClose = true;
  }
}
