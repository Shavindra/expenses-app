/**
 * External Imports
 */
import { Tooltip, IconButton, withStyles } from '@material-ui/core';

/**
 * Internal Imports
 */
import { useStyles } from './styles';
import React, { ReactElement } from 'react';

type ButtonIconProps = {
  icon: ReactElement;
  label: string;
  onClick?: (event?: React.MouseEvent<Element>) => void;
  disabled?: boolean;
  variant?: string;
  className?: any;
};

class ButtonWithIcon extends React.Component<ButtonIconProps> {
  public render() {
    const { icon, label, disabled, className } = this.props;

    return (
      <Tooltip title={label} aria-label={label}>
        <span className={className}>
          <IconButton onClick={this.handleClick} disabled={disabled}>
            {icon}
          </IconButton>
        </span>
      </Tooltip>
    );
  }

  private handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };
}

export const UIButtonWithIcon = withStyles(useStyles)(ButtonWithIcon);
