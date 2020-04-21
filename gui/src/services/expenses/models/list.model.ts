/**
 * External Imports
 */
import { AxiosResponse } from 'axios';

/**
 * Internal Imports
 */
import { expenseItemModel } from './item.model';

export const listExpensesModel = (response: AxiosResponse) => {
  const { expenses, total } = response.data;

  // It is better if this is done in API to make life easier
  // however I've added this here only to demonstrate benefit of
  // Facade layer/Model decoupling the FE from BE
  // If API changes then instead of multiple locations
  // only need to make the change in one place.
  const data = expenses.map((item: any) => {
    return expenseItemModel(item);
  });

  return {
    data,
    dataTotal: total,
  };
};
