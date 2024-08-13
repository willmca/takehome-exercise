import { createReducer, on, Action } from '@ngrx/store';
import { updateValue } from '../actions/value.actions';
import { ValueState, initialValueState } from '../model/value.state';

const _valueReducer = createReducer(
  initialValueState,
  on(updateValue, (state, { value }) => ({ ...state, value }))
);

export function valueReducer(state: ValueState | undefined, action: Action) {
  return _valueReducer(state, action);
}
