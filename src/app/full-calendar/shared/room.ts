export class Room {
  id: number;
  name: string;
  btnColor: string;
  isSelected: boolean = false;


  constructor(id: number, name: string, btnColor: string, isSelected: boolean) {
    this.id = id;
    this.name = name;
    this.btnColor = btnColor;
    this.isSelected = isSelected;
  }
}
