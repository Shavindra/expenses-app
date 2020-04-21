import { FilterValue, IdType } from 'react-table';

export function multiCurrencyRangeFilter<T extends object>(
  rows: Array<any>,
  id: IdType<T>,
  filterValue: FilterValue
) {
  const { min, max, currency } = filterValue;
  return rows.filter((item) => {
    return (
      (min ? parseInt(item.values[id], 10) > min : true) &&
      (max ? parseInt(item.values[id], 10) < max : true) &&
      (currency ? currency === item.original.amount.currency : true)
    );
  });
}

// Let the table remove the filter if the string is empty
multiCurrencyRangeFilter.autoRemove = (val: any) => !val;
