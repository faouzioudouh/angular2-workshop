import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'app-counter', // <app-counter></app-counter>
    template: `
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <input type="text" [value]="count">
        <input type="text" value="{{count}}">
        `
        // Proprety binding [value]="count" == element['value'] = "count"
})

export class CounterComponent {
    // This decorator tells Angular to treat count as an input binding,
    // much like the Angular 1.x '<' syntax if you’re coming from an Angular 1.x background
    @Input()
    count = 0;

    @Output()
    // Since the paranet comp. awaiting an event, we need to instantiate eventEmitter object.
    changed: EventEmitter<any> = new EventEmitter<any>();

    // Function
    increment () {
        this.count++;

        // Export the change to parent componenets
        this.changed.emit(this.count);
    }

    // Function
    decrement () {
        this.count--;

        // Export the change to parent componenets
        this.changed.emit(this.count);
    }
}
