import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() resultEvt = new EventEmitter<number>()

  opA: number = 0 
  opB: number = 0

  AddNumbers() {
    let result = this.opA + this.opB
    this.resultEvt.emit(result)
  }


}
