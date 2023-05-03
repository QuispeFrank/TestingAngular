import { Component } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  people: Person[] = []

  constructor(private peopleService: PeopleService,
              private router: Router
              ){}

  ngOnInit() {
    this.people = this.peopleService.people
  }

  add() {
    this.router.navigate(['people/add'])
  }
}
