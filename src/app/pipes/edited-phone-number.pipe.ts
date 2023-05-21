import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editedPhoneNumber'
})
export class EditedPhoneNumberPipe implements PipeTransform {

  transform(rawNum: string) {
    rawNum = '+'+ rawNum;

    const countryCode = rawNum.slice(0,4);
    const areaPartCode = rawNum.slice(4,6);
    const midPartCode = rawNum.slice(6,9)
    const preLastPartCode = rawNum.slice(9,11)
    const lastPartCode = rawNum.slice(11,13)

    return `${countryCode} (${areaPartCode}) ${midPartCode}-${preLastPartCode}-${lastPartCode}`
  }

}
