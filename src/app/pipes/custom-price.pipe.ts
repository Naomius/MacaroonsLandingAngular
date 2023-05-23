import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPricePipe'
})
export class CustomPricePipe implements PipeTransform {

  transform(price: number, string: string): string {
    return price + string
  }

}
