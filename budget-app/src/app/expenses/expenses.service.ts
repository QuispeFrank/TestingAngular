import { Expense } from "./expenses.model";

export class ExpenseService {
    expenses: Expense[] = [
        new Expense("apartment rent", 900),
        new Expense("clothes", 200)
    ]

    delete(expense: Expense) {
        let idx: number = this.expenses.indexOf(expense)
        this.expenses.splice(idx, 1)
    }
}