/**
 * External Imports
 */
import React, { useEffect } from 'react';
import { FilterProps } from 'react-table';
import { TextField, InputAdornment } from '@material-ui/core';

/**
 * Internal Imports
 */
import { IconSearch } from '../../icons';

export function ColumnHeaderFilter<T extends object>({
  column: { id, index, filterValue, setFilter, parent },
}: FilterProps<T>) {
  const [value, setValue] = React.useState(filterValue || '');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setFilter(event.target.value || undefined);
  };
  // ensure that reset loads the new value
  useEffect(() => {
    setValue(filterValue || '');
  }, [filterValue]);

  const firstIndex = !(parent && parent.index);
  return (
    <TextField
      name={id}
      value={value}
      autoFocus={index === 0 && firstIndex}
      variant={'standard'}
      onChange={handleChange}
      style={{
        width: '100%',
        alignSelf: 'flex-end'
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconSearch fontSize={'small'} />
          </InputAdornment>
        ),
      }}
    />
  );
}
