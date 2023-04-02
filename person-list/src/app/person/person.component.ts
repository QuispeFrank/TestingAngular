import { Component, Input } from '@angular/core';
import { Person } from '../person.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person: Person;
  @Input() idx: number;

  constructor(private peopleService: PeopleService) {}

  sayHi() {
    this.peopleService.hi.emit(this.idx)
  }
}
