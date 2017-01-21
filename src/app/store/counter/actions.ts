import { Injectable } from '@angular/core';
import { AppState } from './../store';
import { NgRedux } from 'ng2-redux';

export const COUNTER_NAMESPACE = 'Counter/';

export const COUNTER_INCREMENT = COUNTER_NAMESPACE + 'increment';
export const COUNTER_DECREMENT = COUNTER_NAMESPACE + 'decrement';

@Injectable()
export class CounterActions {
    constructor(private ngRedux: NgRedux<AppState>) {}

    increment() {
        this.ngRedux.dispatch({type: COUNTER_INCREMENT});
    }

    decrement(){
        this.ngRedux.dispatch({type: COUNTER_DECREMENT});
    }
}
