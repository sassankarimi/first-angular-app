export class IPUser {
  id: number;
  name: string;
  family: string;
  active: boolean;
  constructor(id: number, name: string, family: string, active: boolean) {
    this.id = id;
    this.name = name;
    this.family = family;
    this.active = active;
  }
}
export class PersonModel {
  public users: any[];
  constructor() {
    this.users = [
      { id: 126, name: 'saman', family: 'Sohrevardi', active: false },
      { id: 127, name: 'Sayeh', family: 'Sarmadi', active: true },
      { id: 128, name: 'Sina', family: 'gaeshasbi', active: false },
    ];
  }
}
