import {Component} from '@angular/core';


@Component({
    selector: 'app-counter', // <app-counter></app-counter>
    template: `
        <button (click)="increment()"> Increment {{count}} </button>
        <input type="text" [value]="count">
        <input type="text" value="{{count}}">
        `
})

export class CounterComponent {
    // Proprety
    count = 0;

    // Function
    increment () {
        this.count++;
    }
}