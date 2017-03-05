import { Injectable } from '@angular/core';

import {Color} from 'interfaces/color.interface';

@Injectable()
export class ColorService {

    colors: Array<Color> = [
        { name: 'red', description: 'red is danger' },
        { name: 'green', description: 'green is natural' },
        { name: 'gray', description: 'gray.. chi la3ba!' }
    ];

    getColors () {
        return this.colors;
    }

    addColor (color) {
        this.colors.push(color);
    }
}