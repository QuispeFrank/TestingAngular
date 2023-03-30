import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator-app';
  result: number = 0;

  doIt(result: number): void {
    this.result = result
  }
}
