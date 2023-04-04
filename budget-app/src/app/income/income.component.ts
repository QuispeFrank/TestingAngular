import { Component } from '@angular/core';
import { IncomeService } from './income.service';
import { Income } from './income.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {

  incomes: Income[] = []
  constructor(private incomeService: IncomeService) {}

  ngOnInit() {
    this.incomes = this.incomeService.incomes
  }

  deleteRegistry(income: Income) {
    this.incomeService.delete(income)
  }

}
