export class Room {
  id: number;
  name: string;
  capacity: number;
  description: string;
  btnColor: string;
  status: string;
  isSelected: boolean = false;

  constructor(obj?: any) {
    this.id           = obj && obj.id           || null;
    this.name         = obj && obj.name         || null;
    this.capacity     = obj && obj.capacity     || null;
    this.description  = obj && obj.description  || null;
    this.btnColor     = obj && obj.btnColor     || null;
    this.status       = obj && obj.status       || null;
    this.isSelected   = obj && obj.isSelected   || false;
  }
}
