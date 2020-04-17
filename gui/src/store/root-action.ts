import * as appActions from '../state-managers/app/app.actions';
import * as expensesActions from '../state-managers/expenses/expense.actions';

export const rootAction = {
  app: appActions,
  expenses: expensesActions,
};
