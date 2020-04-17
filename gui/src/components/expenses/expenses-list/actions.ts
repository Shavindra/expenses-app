import { expenseService } from '../../../services';
import { expensesListLoadSuccessAction } from '../../../state-managers';

export const listExpenses = () => {
  return async function (dispatch: any) {
    const expenses = await expenseService.get();

    dispatch(expensesListLoadSuccessAction(expenses));
  };
};
