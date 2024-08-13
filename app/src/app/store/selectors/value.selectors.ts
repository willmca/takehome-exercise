import { createSelector } from '@ngrx/store';
import { ValueState } from '../model/value.state';
import { AppState } from '../model/app.state';
import { isNil } from 'lodash-es';

export const selectValueState = (state: AppState) => state.valueState;

export const selectCurrentValue = createSelector(
  selectValueState,
  (state: ValueState) => !isNil(state.value) ? state.value : ''
);
