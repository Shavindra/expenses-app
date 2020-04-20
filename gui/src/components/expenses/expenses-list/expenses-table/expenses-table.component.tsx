import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppBarProps, AppBarState } from '../types';
import { RootState } from '../../../../store/types';
import { listExpenses } from '../actions';
import {
  UITableComponent,
  IconExpandMore,
  IconExpandLess,
  UIButtonWithIcon,
} from '../../../../ui';
import { EditDetailsComponent } from '../edit-expenses/edit-expenses.component';
import { useStyles } from './styles';

class ExpensesListCmp extends React.Component<AppBarProps, AppBarState> {
  public componentDidMount() {
    this.props.actions.listExpenses();
  }

  public render() {
    return (
      <React.Fragment>
        <div>Expenses list</div>

        <UITableComponent
          name={'expenses-list'}
          columns={this.dataColumns()}
          data={this.props.state.expenses.data}
          multiEdit={false}
          groupBy={false}
          SubComponent={EditDetailsComponent}
        />
      </React.Fragment>
    );
  }

  private dataColumns() {
    return [
      {
        Header: 'Full Name',
        accessor: 'user.fullname',
        filter: 'fuzzyText',
        disableResizing: true,
        disableGroupBy: true,
      },
      {
        Header: 'Merchant',
        accessor: 'merchant',
        filter: 'fuzzyText',
        disableResizing: true,
        disableGroupBy: true,
      },
      {
        Header: 'Amount',
        accessor: 'amount.asString',
        filter: 'fuzzyText',
        alignItems: 'center',
        disableResizing: true,
        disableGroupBy: true,
      },
      {
        id: 'expander',
        expander: true,
        Header: () => <strong></strong>,
        maxWidth: 10,
        Cell: (props: any) => {
          const { row } = props;
          return (
            // Use Cell to render an expander for each row.
            // We can use the getToggleRowExpandedProps prop-getter
            // to build the expander.
            <span {...row.getToggleRowExpandedProps()}>
              {row.isExpanded ? (
                <UIButtonWithIcon
                  label={'more info'}
                  icon={<IconExpandMore />}
                />
              ) : (
                <UIButtonWithIcon
                  label={'more info'}
                  icon={<IconExpandLess />}
                />
              )}
            </span>
          );
        },
        alignItems: 'center',
        disableResizing: true,
        disableGroupBy: true,
        disableHideToggle: true,
        style: {
          cursor: 'pointer',
          fontSize: 25,
          padding: '0',
          textAlign: 'center',
          userSelect: 'none',
        },
      },
    ];
  }
}

// Map States to Props
function mapStateToProps(state: RootState): { state: RootState } {
  const { expenses } = state;
  return {
    state: {
      expenses,
    },
  };
}

function mapDispatchToProps(dispatch: any): { actions: any } {
  return {
    actions: bindActionCreators({ listExpenses }, dispatch),
  };
}

export const ExpensesListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ExpensesListCmp));