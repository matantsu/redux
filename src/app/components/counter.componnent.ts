import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div>
            counter: {{counter}}
            <button (click)="increment.emit()">+</button>
            <button (click)="decrement.emit()">-</button>
        </div>
    `
})
export class CounterComponent {
    @Input() counter: number;
    @Output() increment: EventEmitter<void> = new EventEmitter<void>();
    @Output() decrement: EventEmitter<void> = new EventEmitter<void>();
}
