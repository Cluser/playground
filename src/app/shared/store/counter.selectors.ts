import { createSelector } from '@ngrx/store';
import { AppState, CounterState } from './counter.state';

// Wydzielenie selectora countera
export const getCounterState = (state: AppState) => state.counterState;

// Wydzielenie selectora wartości licznika
export const getCounterValue = createSelector(getCounterState, (state: CounterState) => state.value);

// Wydzielenie selectora kroku licznika
export const getCounterStep = createSelector(getCounterState, (state: CounterState) => state.step);
