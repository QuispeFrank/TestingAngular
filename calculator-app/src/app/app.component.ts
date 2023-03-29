import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator-app';
  opA: number = 0;
  opB: number = 0;
  result: number = 0;

  doIt(): void {
    this.result = this.opA + this.opB;
  }
}
