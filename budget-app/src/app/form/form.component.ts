import { Component } from '@angular/core';
import { IncomeService } from '../income/income.service';
import { ExpenseService } from '../expenses/expenses.service';
import { Income } from '../income/income.model';
import { Expense } from '../expenses/expenses.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  type: string = 'incomeOperation';
  descriptionInput: string = '';
  valueInput: number = 0;

  constructor(
    private incomeService: IncomeService,
    private expenseService: ExpenseService
  ) {}

  operationType(event: any) {
    this.type = event.target.value;
  }

  addValue() {
    if (this.type === 'incomeOperation')
      this.incomeService.incomes.push(
        new Income(this.descriptionInput, this.valueInput)
      );
    else
      this.expenseService.expenses.push(
        new Expense(this.descriptionInput, this.valueInput)
      );
  }
}
