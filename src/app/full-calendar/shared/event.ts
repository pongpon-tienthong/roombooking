export class Event {

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
  repeatNumber: number;

  constructor(obj?: any) {
    this.id = obj && obj.id                       || null;
    this.title = obj && obj.title                 || '';
    this.locationName = obj && obj.location_name  || '';
    this.locationId = obj && obj.location_id      || null;
    this.layout = obj && obj.layout               || '';
    this.start = obj && obj.start                 || '';
    this.end = obj && obj.end                     || '';
    this.description = obj && obj.description     || '';
    this.allDay = obj && obj.all_day              || false;
    this.contactName = obj && obj.contact_name    || '';
    this.contactNumber = obj && obj.contact_number|| '';
    this.contactEmail = obj && obj.contact_email  || '';
    this.sendEmail = obj && obj.send_email        || false;
    this.repeat = obj && obj.repeat               || 'none';
    this.repeatNumber = obj && obj.repeatNumber   || 0;
  }
}
