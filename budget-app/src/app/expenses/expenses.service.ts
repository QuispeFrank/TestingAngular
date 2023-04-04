import { Expense } from "./expenses.model";

export class ExpenseService {
    expenses: Expense[] = [
        new Expense("apartment rent", 900),
        new Expense("clothes", 200)
    ]
}