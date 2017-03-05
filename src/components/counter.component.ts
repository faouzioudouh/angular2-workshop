import {Component} from '@angular/core';


@Component({
    selector: 'app-counter', // <app-counter></app-counter>
    template: `<button (click)="increment()"> Increment {{count}} </button>`
})

export class CounterComponent {
    // Proprety
    count = 0;

    // Function
    increment () {
        this.count++;
    }
}