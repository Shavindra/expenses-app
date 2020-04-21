/**
 * External Imports
 */
import React from 'react';
import { Grid, Typography, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

/**
 * Internal Imports
 */
import {
  UITextFieldEditable,
  UIFileUpload,
  AddIcon,
  UIGridList,
} from '../../../../ui';
import { updateExpense, uploadReceipt } from '../actions';
import { RootState } from '../../../../store';
import { useStyles } from './styles';

export class EditDetails extends React.Component<any, any> {
  public render() {
    const { classes, fromMap } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.title}>
          Edit Details
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <UITextFieldEditable
              value={fromMap.comment}
              label={'Comments'}
              multiline={true}
              fullWidth={true}
              onDisable={this.handleCommentUpdate}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <div className={classes.receiptHeader}>
              <Typography variant="h6">Receipts</Typography>
              <UIFileUpload onChange={this.handleFileUpload} icon={AddIcon} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <UIGridList data={this.props.fromMap.receipts} />
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

  private handleFileUpload = (files: any) => {
    const { id } = this.props.fromMap;
    this.props.actions.uploadReceipt({ id, files });
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
    actions: bindActionCreators({ updateExpense, uploadReceipt }, dispatch),
  };
}
export const EditDetailsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(EditDetails));
