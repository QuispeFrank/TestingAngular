import { Component } from '@angular/core';
// import { Person } from './person.model';
// import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'people';
  // people: Person[] = []

  // constructor(private peopleService: PeopleService){}

  // ngOnInit() {
  //   this.people = this.peopleService.people
  // }

}
