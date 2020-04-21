import React, {
  CSSProperties,
  PropsWithChildren,
  ReactElement,
  useEffect,
} from 'react';import { TableSortLabel } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import cx from 'clsx';
import {
  Cell,
  useTable,
} from 'react-table';

import { TablePagination } from './TablePagination';
import { useStyles } from './TableStyles';
import { TableToolbar } from './TableToolbar';
import { useLocalStorage, useDebounce } from '../../utils';
import { filterTypes, defaultColumn, hooks, headerProps, cellProps } from './table-features';

export function UITableComponent<T extends object>(
  props: PropsWithChildren<any>
): ReactElement {
  const {
    name,
    columns,
    onAdd,
    onDelete,
    onEdit,
    onClick,
    multiEdit,
    SubComponent,
  } = props;
  const classes = useStyles();
  const [initialState, setInitialState] = useLocalStorage(
    `tableState:${name}`,
    {}
  );
  const instance = useTable<T>(
    {
      ...props,
      columns,
      filterTypes,
      defaultColumn,
      initialState,
    },
    ...hooks
  );

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    state,
  } = instance;
  const debouncedState = useDebounce(state, 500);

  useEffect(() => {
    const {
      sortBy,
      filters,
      pageSize,
      columnResizing,
      hiddenColumns,
    } = debouncedState;
    const val = {
      sortBy,
      filters,
      pageSize,
      columnResizing,
      hiddenColumns,
    };
    setInitialState(val);
  }, [setInitialState, debouncedState]);

  const cellClickHandler = (cell: Cell<T>) => () => {
    onClick && cell.column.id !== '_selector' && onClick(cell.row);
  };

  return (
    <>
      <TableToolbar
        instance={instance}
        Fflex-start
        {...{ multiEdit, onAdd, onDelete, onEdit }}
      />
      {/* <FilterChipBar<T> instance={instance} /> */}
      <div className={classes.tableTable} {...getTableProps()}>
        <div>
          {headerGroups.map((headerGroup, i) => (
            <div
              {...headerGroup.getHeaderGroupProps()}
              className={classes.tableHeadRow}
              key={i}
            >
              {headerGroup.headers.map((column: any, i) => {
                const style = {
                  textAlign: column.align ? column.align : 'left ',
                } as CSSProperties;
                return (
                  <div
                    {...column.getHeaderProps(headerProps)}
                    className={classes.tableHeadCell}
                    key={i}
                  >
                    {column.canGroupBy && (
                      <TableSortLabel
                        active
                        direction={column.isGrouped ? 'desc' : 'asc'}
                        IconComponent={KeyboardArrowRight}
                        {...column.getGroupByToggleProps()}
                        className={classes.headerIcon}
                      />
                    )}
                    {column.canSort ? (
                      <TableSortLabel
                        active={column.isSorted}
                        direction={column.isSortedDesc ? 'desc' : 'asc'}
                        {...column.getSortByToggleProps()}
                        className={classes.tableSortLabel}
                        style={style}
                      >
                        {column.render('Header')}
                      </TableSortLabel>
                    ) : (
                      <div style={style} className={classes.tableLabel}>
                        {column.render('Header')}
                      </div>
                    )}
                    {column.canFilter && column.render('Filter')}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className={classes.tableBody}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <div
                key={i}
                {...row.getRowProps()}
                style={{ display: 'block' }}
                className={cx(classes.tableRow, {
                  'row-selected': row.isExpanded,
                })}
              >
                <div
                  style={{ display: 'flex' }}
                  className={cx(classes.tableRow, {
                    'row-selected': row.isExpanded,
                  })}
                >
                  {row.cells.map((cell: any, i) => {
                    return (
                      <div
                        {...cell.getCellProps(cellProps)}
                        onClick={cellClickHandler(cell)}
                        className={classes.tableCell}
                        key={i}
                      >
                        {cell.isGrouped ? (
                          <>
                            <TableSortLabel
                              classes={{
                                iconDirectionAsc: classes.iconDirectionAsc,
                                iconDirectionDesc: classes.iconDirectionDesc,
                              }}
                              active
                              direction={row.isExpanded ? 'desc' : 'asc'}
                              IconComponent={KeyboardArrowUp}
                              {...row.getToggleRowExpandedProps()}
                              className={classes.cellIcon}
                            />{' '}
                            {cell.render('Cell')} ({row.subRows.length})
                          </>
                        ) : cell.isAggregated ? (
                          cell.render('Aggregated')
                        ) : cell.isPlaceholder ? null : (
                          cell.render('Cell')
                        )}
                      </div>
                    );
                  })}
                </div>
                {row.isExpanded ? (
                  <div className={classes.subComponent}>
                    <SubComponent data={row.original} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      <TablePagination<T> instance={instance} />
    </>
  );
}
