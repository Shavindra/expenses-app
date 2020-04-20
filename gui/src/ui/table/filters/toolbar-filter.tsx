import React, { useEffect } from 'react';
import { FilterProps } from 'react-table';
import { UITextField } from '../../text-fields';

export function DefaultColumnFilter<T extends object>({
  column: { id, index, filterValue, setFilter, render, parent },
}: FilterProps<T>) {
  const [value, setValue] = React.useState(filterValue || '');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  // ensure that reset loads the new value
  useEffect(() => {
    setValue(filterValue || '');
  }, [filterValue]);

  const firstIndex = !(parent && parent.index);
  return (
    <UITextField
      name={id}
      label={render('Header')}
      value={value}
      autoFocus={index === 0 && firstIndex}
      variant={'standard'}
      onChange={handleChange}
      onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value || undefined);
      }}
    />
  );
}
