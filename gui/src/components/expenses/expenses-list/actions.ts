import { expenseService } from '../../../services';
import {
  expensesListLoadSuccessAction,
  expensesUpdateSuccessAction,
  expensesUpdatingAction,
} from '../../../state-managers';

export const listExpenses = () => {
  return async function (dispatch: any) {
    const expenses = await expenseService.get();

    dispatch(expensesListLoadSuccessAction(expenses));
  };
};

export const updateExpense = (payload: any) => {
  const { id, ...rest } = payload;

  return async function (dispatch: any) {
    dispatch(expensesUpdatingAction({ id }));

    const expenses = await expenseService.post(`/${id}`, rest);

    dispatch(expensesUpdateSuccessAction(expenses));
  };
};
