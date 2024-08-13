import { createSelector } from '@ngrx/store';
import { ValueState } from '../model/value.state';
import { AppState } from '../model/app.state';

export const selectValueState = (state: AppState) => state.valueState;

export const selectCurrentValue = createSelector(
  selectValueState,
  (state: ValueState) => state.value
);
