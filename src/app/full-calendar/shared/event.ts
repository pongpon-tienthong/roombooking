export class Event {

  // Event Detail
  eventId: number;
  title: string;
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
