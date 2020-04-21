/**
 * External Imports
 */
import { AxiosResponse } from 'axios';

/**
 * Internal Imports
 */
import { formatNumber } from '../../../utils';

export const listExpensesModel = (response: AxiosResponse) => {
  const { expenses, total } = response.data;

  // It is better if this is done in API to make life easier
  // however I've added this here only to demonstrate benefit of
  // Facade layer/Model decoupling the FE from BE
  // If API changes then instead of multiple locations
  // only need to make the change in one place.
  const data = expenses.map((item: any) => {
    const { first, last } = item.user;
    const user = { ...item.user, fullname: `${first} ${last}` };

    const { value, currency } = item.amount;
    const amount = {
      ...item.amount,
      asString: `${currency} ${formatNumber(value)}`,
    };

    return {
      ...item,
      user,
      amount,
    };
  });

  return {
    data,
    dataTotal: total,
  };
};
