import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[duplicat]'
})

export class DuplicateDirective implements OnChanges {

    @Input() set duplicat (count) {
        this.viewContainerRef.clear();
        for (let i = 0; i < count; i++) {
            console.log(this.templateRef);
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    };

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef ) { }

    // OR
    //
    // duplict (count: number) {
    //     this.viewContainerRef.clear();
    //     for (let i = 0; i < count; i++) {
    //         console.log(this.templateRef);
    //         this.viewContainerRef.createEmbeddedView(this.templateRef);
    //     }
    // }

    ngOnChanges (changes) {
        console.log(changes.duplicat.currentValue);
        // this.duplict(changes.duplicat.currentValue);
    }

}