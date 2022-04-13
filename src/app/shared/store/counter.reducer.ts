import { createReducer, on, props } from '@ngrx/store';
import { changeStep, decrement, increment, reset } from './counter.actions';
import { CounterState, initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState, // Definicja stanu początkowego
  on(increment, (state) => onIncrement(state)),
  on(decrement, (state) => onDecrement(state)),
  on(reset, (state) => onReset(state)),
  on(changeStep, (state, props) => onChangeStep(state, props))
);

const onIncrement = (state: CounterState) => ({
  ...state,
  value: state.value + state.step,
});

const onDecrement = (state: CounterState) => ({
  ...state,
  value: state.value - state.step,
});

const onReset = (state: CounterState) => ({
  ...state,
  value: initialState.value,
  step: initialState.step,
});

const onChangeStep = (state: CounterState, props: { step: number }) => ({
  ...state,
  step: props.step,
});
