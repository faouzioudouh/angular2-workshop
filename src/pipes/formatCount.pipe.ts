import {Pipe, PipeTransform} from '@angular/core';

/**
 * For further infos about Pipes : https://angular.io/docs/ts/latest/guide/pipes.html
 */
@Pipe({
    name: 'formatCount'
    // pure: true by default.
})

export class FormatCountPipe implements PipeTransform {

    transform(value: number): string {
        let toRetrun = '';

        if (value === 0) {
            toRetrun = 'Zero';
        }else if (value === 1){
            toRetrun = 'first';
        }else if (value === 2){
            toRetrun = 'second';
        } else {
            toRetrun = `${value}'th`;
        }

        return toRetrun;
    };
}