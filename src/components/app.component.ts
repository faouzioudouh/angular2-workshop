// Import Core
import {Component} from '@angular/core';

// Import components
import {CounterComponent} from 'components/counter.component';

// Import directives
import {ChnageColorDirective} from '../directives/changeColor.directive';

// Import services
import {ColorService} from '../services/color.service';

//Import interfaces
import {Color} from '../interfaces/color.interface';
/**
 * For further details please check: https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html
 */
@Component({

    // selector
    selector: 'app-workshop', // <app-workshop></app-workshop>
    template: `
        <p class="big-font" changeColor *duplicat="initialCount">My {{initialCount | formatCount}} angular component!!</p>
        <hr/>
        <p>Add color : </p>
        <input type="text" [value]="colorName" (input)="colorName = $event.target.value" />
        <input type="text" [(ngModel)]="colorName" />
        <input type="text" [value]="colorDescription" (input)="colorDescription = $event.target.value" />
        <input type="text" [(ngModel)]="colorDescription" />        
        <input type="submit" (click)="addColor()" value="add color" />
        <br/>
        <br/>
        <br/>
        <app-counter 
            [count]="initialCount"
            (changed)="countChanged($event)">
        </app-counter>
        <div *ngFor="let color of colors">
            {{color.name}}
        </div>
        `,
    // OR
    // templateUrl: 'url/to/template'
    styles: ['.big-font { font-size: 3em; }'],
    // OR
    // styleUrl: 'url/to/stylesheet'

})

export class AppComponent {
    initialCount = 5;
    colorName = '';
    colorDescription = '';
    colorService: ColorService;
    colors: Color[] = [];

    constructor(colorService: ColorService) {
        this.colorService = colorService;
        this.colors = this.colorService.getColors();
    }

    countChanged(event) {
        this.initialCount = event;
    }

    addColor () {
        this.colorService.addColor({name: this.colorName, description: this.colorDescription});
        this.colorName = '';
        this.colorDescription = '';
        console.log(this.colorService.getColors());
    }
}
