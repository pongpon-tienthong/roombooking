import {Event} from "../../model/event";
import {EventModalContext} from "../../model/event-modal-context";

export class ShowEventModalContext extends EventModalContext {

  public event: Event;

  constructor() {
    super();
  }
}
