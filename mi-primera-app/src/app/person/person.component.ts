import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  age: number = 28;
  first_name: string = 'Frank';
  last_name: string = 'Quispe'
}
