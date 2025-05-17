export interface Person {
  id: number;
  name: string;
  email: string;
}

export class Person {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  static fromJson(json: any): Person {
    return new Person(json.id, json.name, json.email);
  }
  toJson(): any {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}
