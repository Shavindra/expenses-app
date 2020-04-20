import { APIService } from '../api';
import { listExpensesModel, updateExpenseModel } from './models';

class ExpenseService extends APIService {
  public async get(params?: any): Promise<any> {
    const response = await super.get(params);
    return listExpensesModel(response);
  }

  public async post(url: string, params?: any, config?: any): Promise<any> {
    const response = await super.post(url, params, config);
    return updateExpenseModel(response);
  }
}

export const expenseService = new ExpenseService('/expenses');
