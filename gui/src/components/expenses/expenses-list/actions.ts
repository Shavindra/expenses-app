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

export const uploadReceipt = (payload: any) => {
  return async function (dispatch: any) {
    const { id, files } = payload;

    const formData = new FormData();
    formData.append('receipt', files[0], files[0].name);

    dispatch(expensesUpdatingAction({ id }));

    // TODO: add the header config to another method .fileUpload
    const expenses = await expenseService.post(`/${id}/receipts`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    dispatch(expensesUpdateSuccessAction(expenses));
  };
};
