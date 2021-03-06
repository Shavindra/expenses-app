/**
 * External Imports
 */
import cx from 'clsx';
import React from 'react';
import { ColumnInstance } from 'react-table';

/**
 * Internal Imports
 */
import { useStyles } from './TableStyles';

export const ResizeHandle = <T extends {}>({
  column,
}: {
  column: ColumnInstance<T>;
}) => {
  const classes = useStyles();
  return (
    <div
      {...column.getResizerProps()}
      style={{ cursor: 'col-resize' }} // override the useResizeColumns default
      className={cx({
        [classes.resizeHandle]: true,
        handleActive: column.isResizing,
      })}
    />
  );
};
