// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to

import React from 'react';
import { FilterProps, IdType, Row } from 'react-table';
import { UITextField } from '../../text-fields';
import { MenuItem } from '@material-ui/core';

const getMinMax = (rows: Row<any>[], id: IdType<any>) => {
  let min = rows.length ? rows[0].values[id] : 0;
  let max = rows.length ? rows[0].values[id] : 0;
  rows.forEach((row) => {
    min = Math.min(row.values[id], min);
    max = Math.max(row.values[id], max);
  });
  return [min, max];
};

const getCurrencies = (preFilteredRows: any[]) => {
  const options = new Set<any>();
  preFilteredRows.forEach((row: any) => {
    options.add(row.original['amount']['currency']);
  });
  return [...Array.from(options.values())];
};

// ones that have values between the two
export const CurrencyRangeFilter: React.FC<any> = ({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}: FilterProps<any>) => {
  const [min, max] = React.useMemo(() => getMinMax(preFilteredRows, id), [
    id,
    preFilteredRows,
  ]);

  const options = React.useMemo(() => getCurrencies(preFilteredRows), [
    preFilteredRows,
  ]);

  const handleFilterChange = (value: any) => {
    setFilter((prevState: any) => {
      return { ...prevState, ...value };
    });
  };

  return (
    <React.Fragment>
      {filterValue[2]}
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'flex-end',
          paddingTop: 5,
        }}
      >
        <UITextField
          select
          label={'currency'}
          value={filterValue.currency || ''}
          onChange={(e: any) => {
            const val = e.target.value;
            handleFilterChange({ currency: val ? e.target.value : '' });
          }}
          InputLabelProps={{
            shrink: true,
          }}
          style={{
            width: '100px',
            marginRight: '0.5rem',
          }}
        >
          <MenuItem value={''}>-</MenuItem>
          {options.map((option: any, i: number) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </UITextField>

        <UITextField
          label={`Min (${min})`}
          id={`${id}_1`}
          value={filterValue.min || ''}
          type="number"
          onChange={(e: any) => {
            const val = e.target.value;
            handleFilterChange({ min: val ? parseInt(e.target.value, 10) : 0 });
          }}
          InputLabelProps={{
            shrink: true,
          }}
          style={{
            marginRight: '0.5rem',
          }}
        />
        <UITextField
          label={`Max (${max})`}
          id={`${id}_2`}
          value={filterValue.max || ''}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e: any) => {
            const val = e.target.value;
            handleFilterChange({ max: val ? parseInt(e.target.value, 10) : 0 });
          }}
        />
      </div>
    </React.Fragment>
  );
};
