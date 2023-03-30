import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() personAdded = new EventEmitter<Person>();

  nameInput: string
  lastNameInput: string

  addPerson(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement) {
    let person = new Person(nombreInput.value, apellidoInput.value)
    this.personAdded.emit(person)
  }
}
