import { Income } from "./income.model";

export class IncomeService {
    incomes: Income[]= [
        new Income("salary", 4000),
        new Income("sold car", 500)
    ]
}