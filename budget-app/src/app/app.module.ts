import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';
import { FormComponent } from './form/form.component';
import { IncomeService } from './income/income.service';
import { ExpenseService } from './expenses/expenses.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpensesComponent,
    IncomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IncomeService,
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
