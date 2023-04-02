import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Person } from "./person.model";

@Injectable()
export class PeopleService {
    
  people: Person[] = [
    new Person('Leslie', 'Paz'),
    new Person('Juan', 'Salinas'),
    new Person('Danny', 'Chavez'),
  ];

  hi = new EventEmitter<number>()

  constructor(private logginService: LoggingService) {}

  addPerson(person: Person) {
    this.people.push(person)
    this.logginService.sendMessageToConsole(`person: ${person.firstName} ${person.lastName}`)
  }
}