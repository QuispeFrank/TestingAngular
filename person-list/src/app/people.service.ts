import { Person } from "./person.model";

export class PeopleService {
    
  people: Person[] = [
    new Person('Leslie', 'Paz'),
    new Person('Juan', 'Salinas'),
    new Person('Danny', 'Chavez'),
  ];

  addPerson(person: Person) {
    this.people.push(person)
  }
}