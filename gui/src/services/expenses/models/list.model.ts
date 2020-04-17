import { AxiosResponse } from 'axios';

export const listExpensesModel = (response: AxiosResponse) => {
  const { expenses, total } = response.data;
  return {
    data: expenses,
    dataTotal: total,
  };
};
