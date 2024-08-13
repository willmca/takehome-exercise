import { createAction, props } from '@ngrx/store';

export const updateValue = createAction(
  '[Value] Update Value',
  props<{ value: string }>()
);
