export interface Action<T extends string> {
  type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export type ActionCreator<T extends string> = (...args: any) => Action<T>;

export type ActionsCreators<T extends string> = {
  [creator: string]: ActionCreator<T>;
};

export type ActionsUnion<
  P extends string,
  T extends ActionsCreators<P>
> = ReturnType<T[keyof T]>;

export type ActionHandlers<
  P extends string,
  T extends ActionsCreators<P>,
  State
> = {
  [K in ReturnType<T[keyof T]>['type']]: (
    state: State,
    action: ReturnType<T[K]>
  ) => State;
};

export type RootAction = ActionType<typeof rootAction>;
export type RootState = ReturnType<typeof rootReducer>;
