import { Component } from "@angular/core";


@Component ({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent {
    disabled = false;
    message = '';
    show = false;

    addPerson() {
        this.show = true
    }

}