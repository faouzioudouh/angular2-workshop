/**
 * Main.ts
 * the bootstrap code in main.ts doesn't change. This is the last time you'll look at main.ts.
 */

import { Component } from '@angular/core';
import { platformBrowserDynamic as pbd } from '@angular/platform-browser-dynamic';

// Import modules
import {AppModule} from './app.module';

// Bootsrap the app, Whhoaa!
pbd()
    .bootstrapModule(AppModule);
