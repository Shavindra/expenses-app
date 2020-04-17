import { RootState } from '../types';

// TODO: reuse from @redux/toolkit with typescript e.g. type AH
// Ref: https://github.com/reduxjs/redux-toolkit/blob/master/src/createReducer.ts
export function createReducer<AH extends any, S>(
  actionHandlers: AH,
  initialState: S
): RootState {
  return (state: S = initialState, action: AH): S => {
    if (Object.prototype.hasOwnProperty.call(actionHandlers, action.type)) {
      return actionHandlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
