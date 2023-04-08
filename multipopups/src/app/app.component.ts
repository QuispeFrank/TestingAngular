import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multipopups';
  showpopupA = false;
  showpopupC = false;
  showpopupB = false;

  showPopupC() {
    this.showpopupC = true;
  }
  showPopupB() {
    this.showpopupB = true;
  }
  showPopupA() {
    this.showpopupA = true;
  }
}
