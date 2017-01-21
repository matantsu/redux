import { CounterActions } from './store/counter/actions';
import { AppState } from './store/store';
import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: `
    <counter [counter]="counter$ | async" (increment)="increment()" (decrement)="decrement()"></counter>
  `,
  styles: [],
})
export class AppComponent {
  @select((state: AppState) => state.counter.value) counter$: Observable<number>;

  constructor(private counterActions: CounterActions) {}

  increment() {
    this.counterActions.increment();
  }

  decrement() {
    this.counterActions.decrement();
  }
}
