import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCountPipe'
})
export class ProductCountPipe implements PipeTransform {

  transform(count: number): string {
    return count + ' шт'
  }

}
