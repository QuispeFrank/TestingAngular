import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() personAdded = new EventEmitter<Person>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('lastNameInput') lastNameInput: ElementRef;

  addPerson() {
    let person = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);
    this.personAdded.emit(person);
  }
}
