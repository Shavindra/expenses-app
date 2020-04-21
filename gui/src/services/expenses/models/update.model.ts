/**
 * External Imports
 */
import { AxiosResponse } from 'axios';

/**
 * Internal Imports
 */
import { formatNumber } from '../../../utils';

export const updateExpenseModel = (response: AxiosResponse) => {
  const { data } = response;

  // It is better if this is done in API to make life easier
  // however I've added this here only to demonstrate benefit of
  // Facade layer/Model decoupling the FE from BE
  // If API changes then instead of multiple locations
  // only need to make the change in one place.
  const { first, last } = data.user;
  const user = { ...data.user, fullname: `${first} ${last}` };

  const { value, currency } = data.amount;
  const amount = {
    ...data.amount,
    asString: `${currency} ${formatNumber(value)}`,
  };

  return {
    ...data,
    user,
    amount,
  };
};
