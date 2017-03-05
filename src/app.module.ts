// Import Core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

// Import componenets
import {AppComponent} from './components/app.component';
import {CounterComponent} from './components/counter.component';

// Import Pipes
import {FormatCountPipe} from './pipes/formatCount.pipe';

// Import directives
import {ChnageColorDirective} from './directives/changeColor.directive';

// Import services
import {ColorService} from './services/color.service';

/**
 *  For more details about NgModule decoretor: https://angular.io/docs/ts/latest/guide/appmodule.html
 */
@NgModule({

    declarations: [
        AppComponent,
        CounterComponent,
        FormatCountPipe,
        ChnageColorDirective
        // List of all direvtices, pipes and components only!
        // You must declare every component in an NgModule class
    ],
    imports: [
        BrowserModule, // Should be in the root of this array.
        FormsModule
        // List of all other modules..
        // Only NgModule classes go in the imports array. Do not put any other kind of class in imports.
    ],
    providers: [
        ColorService
        // List of all services..
    ],
    bootstrap: [
        AppComponent
        // The module we'll bootstrap.
        // Each bootstrapped component is the base of its own tree of components.
        // Most applications have only one component tree and they bootstrap a single root component.
    ]

})

export class AppModule {}
