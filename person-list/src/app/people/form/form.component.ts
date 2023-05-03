import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Person } from '../../person.model';
import { PeopleService } from '../../people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nameInput:string
  lastNameInput:string
  index: number;



  constructor(private peopleService: PeopleService,
              private router: Router,
              private route: ActivatedRoute
              ) {
    this.peopleService.hi.subscribe(
      (idx: number) => alert(`Index is: ${idx}`)
    )
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let person: Person = this.peopleService.findPerson(this.index);
      this.nameInput = person.firstName;
      this.lastNameInput = person.lastName;
    }
  }

  onSavePerson() {
    let personX = new Person(this.nameInput, this.lastNameInput);
    if(this.index) {
      this.peopleService.updatePerson(this.index, personX);
    } else {
      this.peopleService.addPerson(personX);
    }
    this.router.navigate(['people'])
  }
}
