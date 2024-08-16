import { createSelector } from '@ngrx/store';
import { ValueState } from '../model/value.state';
import { AppState } from '../model/app.state';
import { isNil } from 'lodash-es';
import { GET_DISPLAY_FROM_INPUT } from '../../constants/display.constant';

export const selectValueState = (state: AppState) => state.valueState;

export const selectCurrentValue = createSelector(
  selectValueState,
  (state: ValueState) => !isNil(state.value) ? state.value : ''
);

export const selectCurrentValueFormatted = createSelector(
  selectCurrentValue,
  (value: string) => {
    return GET_DISPLAY_FROM_INPUT(value); 
  }
)
