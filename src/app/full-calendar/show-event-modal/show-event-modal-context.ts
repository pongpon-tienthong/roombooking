import {Event} from "../shared/event";
import {EventModalContext} from "../shared/event-modal-context";

export class ShowEventModalContext extends EventModalContext {

  public event: Event;

  constructor() {
    super();
  }
}
