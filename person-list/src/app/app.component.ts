import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'people';
  people: Person[] = [
    new Person('Leslie', 'Paz'),
    new Person('Juan', 'Salinas'),
    new Person('Danny', 'Chavez'),
  ];

  addPerson(person: Person) {
    this.people.push(person)
  }
}
