import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppBarProps, AppBarState } from './types';
import { useStyles } from './styles';
import { RootState } from '../../../store/types';
import { listExpenses } from './actions';

class ExpensesListCmp extends React.Component<AppBarProps, AppBarState> {
  public componentDidMount() {
    this.props.actions.listExpenses();
  }

  public render() {
    return <div>Expenses list</div>;
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
