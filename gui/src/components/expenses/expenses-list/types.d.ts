interface AppBarState {
  classes: any;
}

export type AppBarProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    onMenuButtonClick: (event?: React.MouseEvent<HTMLElement>) => void;
    openMenu: boolean;
    classes: any;
  };
