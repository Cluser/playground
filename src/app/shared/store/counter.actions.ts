import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Ngrx] Increment');
export const decrement = createAction('[Ngrx] Decrement');
export const reset = createAction('[Ngrx] Reset');
export const changeStep = createAction('[Ngrx] Change step', props<{ step: number }>());
export const getData = createAction('[Ngrx] Get data');
