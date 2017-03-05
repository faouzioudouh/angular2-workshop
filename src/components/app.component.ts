// Import Core
import {Component} from '@angular/core';

// Import components
import {CounterComponent} from 'components/counter.component';

import {ChnageColorDirective} from '../directives/changeColor.directive';

/**
 * For further details please check: https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html
 */
@Component({

    // selector
    selector: 'app-workshop', // <app-workshop></app-workshop>
    template: `
        <p class="big-font" changeColor>My {{initialCount | formatCount}} angular component!!</p>
        <app-counter 
            [count]="initialCount"
            (changed)="countChanged($event)">
        </app-counter>
        `,
    // OR
    // templateUrl: 'url/to/template'
    styles: ['.big-font { font-size: 3em; }'],
    // OR
    // styleUrl: 'url/to/stylesheet'

})

export class AppComponent {
    initialCount = 5;
    countChanged(event) {
        this.initialCount = event;
    }
}
