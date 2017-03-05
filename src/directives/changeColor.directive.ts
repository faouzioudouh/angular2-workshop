import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[changeColor]'
})

export class ChnageColorDirective {

    constructor( ele: ElementRef) {
        setInterval(() => {
             const color = ele.nativeElement.style.color;
             ele.nativeElement.style.color = (color === '' || color === 'black') ? 'red' : 'black';
        }, 500);
    }

}
