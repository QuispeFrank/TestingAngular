import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() budgetTotalAmount: number = 0
  @Input() expenseTotalAmount: number = 0
  @Input() incomeTotalAmount: number = 0
  @Input() porcentage: number = 0

}
