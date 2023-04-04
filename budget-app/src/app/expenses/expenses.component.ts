import { Component, Input } from '@angular/core';
import { ExpenseService } from './expenses.service';
import { Expense } from './expenses.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

  @Input() totalExpense: number = 0

  expenses: Expense[] = []

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
   this.expenses = this.expenseService.expenses 
  }

  deleteExpense(expense: Expense) {
    this.expenseService.delete(expense)
  }

  porcentage(expense: Expense) {
    return expense.value / this.totalExpense
  }

}
