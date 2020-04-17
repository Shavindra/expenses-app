import { APIService } from '../api';
import { listExpensesModel } from './models/list.model';

class ExpenseService extends APIService {
  public async get(params?: any): Promise<any> {
    const response = await super.get(params);
    return listExpensesModel(response);
  }
}

export const expenseService = new ExpenseService('/expenses');
