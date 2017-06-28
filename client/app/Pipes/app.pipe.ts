import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transform-pipe'
})

export class TransformPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
    }
}