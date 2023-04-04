import { Component } from '@angular/core';
import { Expense } from './expenses/expenses.model';
import { Income } from './income/income.model';
import { ExpenseService } from './expenses/expenses.service';
import { IncomeService } from './income/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-app';

  expenses: Expense[] = []
  incomes: Income[] = []

  constructor(private expensiveService: ExpenseService,
              private incomeService: IncomeService) {
                this.expenses = expensiveService.expenses
                this.incomes = incomeService.incomes
              }

  getTotalExpense() {
    let totalExpense = 0
    this.expenses.forEach(expense => {
      totalExpense += expense.value
    })
    return totalExpense
  }

  getTotalIncome() {
    let totalIncome = 0
    this.incomes.forEach(income => {
      totalIncome += income.value
    })
    return totalIncome
  }

  getPorcentage() {
    return this.getTotalExpense()/this.getTotalIncome()
  }

  getBudget() {
    return this.getTotalIncome() - this.getTotalExpense()
  }

}
