import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRound'
})
export class CurrencyRoundPipe implements PipeTransform {
  public transform(value: number): string {
    let roundNumber: number | string;
    const EPSILON = 0.002;

    if (!value && typeof value !== 'number') {
      return '';
    }

    // eslint-disable-next-line no-bitwise
    if ((value ^ 0) === value) {
      roundNumber = value;
    } else {
      roundNumber = Math.abs(Math.round(value) - value) < EPSILON ? value.toFixed(0) : value.toFixed(2);
    }
    return roundNumber.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
}
