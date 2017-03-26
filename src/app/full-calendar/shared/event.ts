export class Event {

  // TODO: change constructor
  constructor(obj?: any) {
    this.id = obj && obj.id                       || null;
    this.title = obj && obj.title                 || null;
    this.locationName = obj && obj.location_name  || null;
    this.locationId = obj && obj.location_id      || null;
    this.layout = obj && obj.layout               || null;
    this.start = obj && obj.start                 || null;
    this.end = obj && obj.end                     || null;
    this.description = obj && obj.description     || null;
    this.allDay = obj && obj.all_day              || null;
    this.contactName = obj && obj.contact_name    || null;
    this.contactNumber = obj && obj.contact_number|| null;
    this.contactEmail = obj && obj.contact_email  || null;
    this.sendEmail = obj && obj.send_email        || null;
    this.repeat = obj && obj.repeat               || 'none';
  }

// Event Detail
  id: number;
  title: string;

  // TODO: change location to room
  locationName: string;
  locationId: number;

  // TODO: remove this node
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
