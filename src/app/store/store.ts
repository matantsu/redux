import { counterReducer } from './counter/reducer';
import { CounterState, counterInitialState } from './counter/model';
import { Reducer, Action } from 'redux';

export class AppState {
    constructor(public readonly counter: CounterState) {}
}

export const initialState: AppState = new AppState(counterInitialState);

export const rootReducer: Reducer<AppState> = (state: AppState, action: Action) =>
    new AppState(counterReducer(state.counter, action));
