// Definicja stanu aplikacji
export interface AppState {
  counterState: CounterState;
}

// Definicja stanu licznika
export interface CounterState {
  value: number;
  step: number;
}

// Inicjalizacja stanu licznika
export const initialState: CounterState = {
  value: 0,
  step: 1,
};
