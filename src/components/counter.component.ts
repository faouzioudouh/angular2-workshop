import {Component, Input} from '@angular/core';


@Component({
    selector: 'app-counter', // <app-counter></app-counter>
    template: `
        <button (click)="increment()"> Increment {{count}} </button>
        <input type="text" [value]="count">
        <input type="text" value="{{count}}">
        `
        // Proprety binding [value]="count" == element['value'] = "count"
})

export class CounterComponent {
    // This decorator tells Angular to treat count as an input binding,
    // much like the Angular 1.x '<' syntax if you’re coming from an Angular 1.x background
    @Input() count = 0;

    // Function
    increment () {
        this.count++;
    }
}
