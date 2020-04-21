import {
  Hooks,
  Meta,
  useColumnOrder,
  useFilters,
  useGroupBy,
  useSortBy,
  useExpanded,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useRowSelect,
} from 'react-table';
import {
  ColumnHeaderFilter,
  fuzzyTextFilter,
  numericTextFilter,
} from './filters';
import { TooltipCell } from './TooltipCell';
import { multiCurrencyRangeFilter } from './filters/multi-currency';
import { DefaultHeader } from './DefaultHeader';

export const getStyles = (
  props: any,
  align = 'left',
  alignItems = 'flex-start'
) => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems,
      display: 'flex',
    },
  },
];

export const selectionHook = (hooks: Hooks<any>) => {
  hooks.allColumns.push((columns) => [...columns]);
  hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
    // fix the parent group of the selection button to not be resizable
    const selectionGroupHeader = headerGroups[0].headers[0];
    selectionGroupHeader.canResize = false;
  });
};

export const headerProps = <T extends object>(
  props: any,
  { column }: Meta<T, { column: any }>
) =>
  getStyles(
    props,
    //  column && column.disableResizing,
    column && column.align,
    column && column.alignItems
  );

export const cellProps = (props: any, { cell }: any) =>
  getStyles(
    props,
    //  cell.column && cell.column.disableResizing,
    cell.column && cell.column.align,
    cell.column && cell.column.alignItems
  );

export const defaultColumn = {
  Filter: ColumnHeaderFilter,
  Cell: TooltipCell,
  Header: DefaultHeader,
  // When using the useFlexLayout:
  minWidth: 30, // minWidth is only used as a limit for resizing
  width: 50, // width is used for both the flex-basis and flex-grow
  maxWidth: 200, // maxWidth is only used as a limit for resizing
};

export const hooks = [
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

export const filterTypes = {
  fuzzyText: fuzzyTextFilter,
  numeric: numericTextFilter,
  currencyRange: multiCurrencyRangeFilter,
};
