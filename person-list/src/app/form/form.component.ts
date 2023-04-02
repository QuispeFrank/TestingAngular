import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Person } from '../person.model';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nameInput:string
  lastNameInput:string



  constructor(private peopleService: PeopleService) {
    this.peopleService.hi.subscribe(
      (idx: number) => alert(`Index is: ${idx}`)
    )
  }

  addPerson() {
    let person = new Person(this.nameInput, this.lastNameInput);
    this.peopleService.addPerson(person)
  }
}
