import { Component } from "@angular/core";


@Component ({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent {
    disabled = false;
    message = "haven't added a person yet";

    addPerson() {
        this.message = 'person added :D'
    }
}