import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { UITextFieldEditable } from '../../../../ui';
import { useStyles } from './styles';
import { updateExpense } from '../actions';
import { RootState } from '../../../../store';

export class EditDetails extends React.Component<any, any> {
  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.title}>
          Edit Details
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <UITextFieldEditable
              value={this.props.fromMap.comment}
              label={'Comments'}
              multiline={true}
              fullWidth={true}
              onDisable={this.handleCommentUpdate}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  private handleCommentUpdate = (value: string, disabled: boolean) => {
    const { comment, id } = this.props.fromMap;
    if (disabled && value !== comment) {
      this.props.actions.updateExpense({ id, comment: value });
    }
  };
}

function mapStateToProps(state: RootState, ownProps: any) {
  return {
    // Always get from map
    // inline update only update the dataMap for now.
    fromMap: state.expenses.dataMap[ownProps.data.id],
  };
}

function mapDispatchToProps(dispatch: any): { actions: any } {
  return {
    actions: bindActionCreators({ updateExpense }, dispatch),
  };
}
export const EditDetailsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(EditDetails));
