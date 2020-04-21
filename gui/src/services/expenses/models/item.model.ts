/**
 * Internal Imports
 */
import { formatNumber } from '../../../utils';
import { formatDate } from '../../../utils/format-date';

export const expenseItemModel = (item: any) => {
  const { first, last } = item.user;
  const user = { ...item.user, fullname: `${first} ${last}` };

  const { value, currency } = item.amount;
  const amount = {
    ...item.amount,
    asString: `${currency} ${formatNumber(value)}`,
  };

  const displayDate = formatDate(item.date);

  return {
    ...item,
    user,
    amount,
    displayDate,
  };
};
