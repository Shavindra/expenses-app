import { TableSortLabel } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import cx from 'clsx';
import React, {
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
  useEffect,
} from 'react';
import {
  Cell,
  HeaderProps,
  Hooks,
  Meta,
  Row,
  TableInstance,
  TableOptions,
  useColumnOrder,
  useExpanded,
  useFilters,
  useFlexLayout,
  useGroupBy,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';

import {
  fuzzyTextFilter,
  numericTextFilter,
  ColumnHeaderFilter,
} from './filters';
import { TablePagination } from './TablePagination';
import { useStyles } from './TableStyles';
import { TableToolbar } from './TableToolbar';
import { TooltipCell } from './TooltipCell';
import { camelToWords, useLocalStorage, useDebounce } from '../../utils';

export interface Table<T extends object = {}> extends TableOptions<T> {
  name: string;
  onAdd?: (instance: TableInstance<T>) => MouseEventHandler;
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler;
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler;
  onClick?: (row: Row<T>) => void;
}

const DefaultHeader: React.FC<HeaderProps<any>> = ({ column }: any) => (
  <>{column.id.startsWith('_') ? null : camelToWords(column.id)}</>
);

const getStyles = (props: any, align = 'left', alignItems = 'flex-start') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems,
      display: 'flex',
    },
  },
];

const selectionHook = (hooks: Hooks<any>) => {
  hooks.allColumns.push((columns) => [
    // Let's make a column for selection
    //   {
    //     id: '_selector',
    //     disableResizing: true,
    //     disableGroupBy: true,
    //     minWidth: 45,
    //     width: 45,
    //     maxWidth: 45,
    //     // The header can use the table's getToggleAllRowsSelectedProps method
    //     // to render a checkbox
    //     Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<any>) => (
    //       <HeaderCheckbox {...getToggleAllRowsSelectedProps()} />
    //     ),
    //     // The cell can use the individual row's getToggleRowSelectedProps method
    //     // to the render a checkbox
    //     Cell: ({ row }: CellProps<any>) => (
    //       <RowCheckbox {...row.getToggleRowSelectedProps()} />
    //     ),
    //   },
    ...columns,
  ]);
  hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
    // fix the parent group of the selection button to not be resizable
    const selectionGroupHeader = headerGroups[0].headers[0];
    selectionGroupHeader.canResize = false;
  });
};

const headerProps = <T extends object>(
  props: any,
  { column }: Meta<T, { column: any }>
) =>
  getStyles(
    props,
    //  column && column.disableResizing,
    column && column.align,
    column && column.alignItems
  );

const cellProps = (props: any, { cell }: any) =>
  getStyles(
    props,
    //  cell.column && cell.column.disableResizing,
    cell.column && cell.column.align,
    cell.column && cell.column.alignItems
  );

const defaultColumn = {
  Filter: ColumnHeaderFilter,
  Cell: TooltipCell,
  Header: DefaultHeader,
  // When using the useFlexLayout:
  minWidth: 30, // minWidth is only used as a limit for resizing
  width: 50, // width is used for both the flex-basis and flex-grow
  maxWidth: 200, // maxWidth is only used as a limit for resizing
};

const hooks = [
  useColumnOrder,
  useFilters,
  useGroupBy,
  useSortBy,
  useExpanded,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useRowSelect,
  selectionHook,
];

const filterTypes = {
  fuzzyText: fuzzyTextFilter,
  numeric: numericTextFilter,
};

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
