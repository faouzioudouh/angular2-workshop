// Import Core
import {Component} from '@angular/core';

/**
 * For further details please check: https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html
 */
@Component({

    // selector
    selector: 'app-workshop', // <app-workshop></app-workshop>
    template: `<p class="big-font">My first angular component!!</p>`,
    // OR
    // templateUrl: 'url/to/template'
    styles: ['.big-font { font-size: 3em; }']
    // OR
    // styleUrl: 'url/to/stylesheet'

})

export class AppComponent {}
