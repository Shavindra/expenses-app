import React, { useEffect } from 'react';
import { FilterProps } from 'react-table';
import { TextField } from '@material-ui/core';

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
      // label={render('Header')}
      value={value}
      autoFocus={index === 0 && firstIndex}
      variant={'standard'}
      onChange={handleChange}
      style={{
        width: '100%',
      }}
    />
  );
}
