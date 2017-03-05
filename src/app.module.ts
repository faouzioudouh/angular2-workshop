// Import Core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Import componenets
import {AppComponent} from './components/app.component';
import {CounterComponent} from './components/counter.component';

/**
 *  For more details about NgModule decoretor: https://angular.io/docs/ts/latest/guide/appmodule.html
 */
@NgModule({

    declarations: [
        AppComponent,
        CounterComponent
        // List of all direvtices, pipes and components only!
        // You must declare every component in an NgModule class
    ],
    imports: [
        BrowserModule // Should be in the root of this array.
        // List of all other modules..
        // Only NgModule classes go in the imports array. Do not put any other kind of class in imports.
    ],
    providers: [
        // List of all other components..
    ],
    bootstrap: [
        AppComponent
        // The module we'll bootstrap.
        // Each bootstrapped component is the base of its own tree of components.
        // Most applications have only one component tree and they bootstrap a single root component.
    ]

})

export class AppModule {}
