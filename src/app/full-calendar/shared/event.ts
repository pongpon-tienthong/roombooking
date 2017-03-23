export class Event {

  // TODO: change constructor
  constructor (event: Object = {}) {
    Object.assign(this, event);
  }

  // Event Detail
  eventId: number;
  title: string;

  // TODO: change location to room
  locationName: string;
  locationId: number;
  layout: string;
  start: string;
  end: string;
  description: string;
  allDay: boolean;

  // Contact
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  sendEmail: boolean;

  // Repetition
  repeat: string;
}
