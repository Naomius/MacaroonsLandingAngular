import { Pipe, PipeTransform } from '@angular/core';

const map = {
  'RUB': 'ru-RU',
}

@Pipe({name: 'productPrice'})
export class ProductPricePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return null;
  }

}
