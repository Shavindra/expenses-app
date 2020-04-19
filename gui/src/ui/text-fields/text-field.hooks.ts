import { useCallback, useState } from 'react';

export const useDisableInput: any = (
  initial: boolean = true,
  value: any,
  callback?: any
) => {
  const [disabled, setDisabled] = useState(initial);

  const toggleDisable = useCallback(
    (event: MouseEvent) => {
      const isDisabled = !disabled;

      setDisabled(isDisabled);
      if (typeof callback === 'function') {
        callback(value, isDisabled);
      }
    },
    [disabled, value]
  );

  return [disabled, toggleDisable];
};

export const useOnChange: any = (initial = '', callback?: any) => {
  const [value, setValue] = useState(initial);

  const onChange = useCallback(
    (event: any) => {
      setValue(event.target.value);
      if (typeof callback === 'function') {
        callback(event.target.value);
      }
    },
    [value]
  );
  return [value, onChange];
};
