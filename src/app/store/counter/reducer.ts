import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './actions';
import { CounterState } from './model';
import { Reducer, Action } from 'redux';

export const counterReducer: Reducer<CounterState> = (state: CounterState, action: Action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return new CounterState(state.value + 1);
        case COUNTER_DECREMENT:
            return new CounterState(state.value - 1);
        default:
            return state;
    }
};
