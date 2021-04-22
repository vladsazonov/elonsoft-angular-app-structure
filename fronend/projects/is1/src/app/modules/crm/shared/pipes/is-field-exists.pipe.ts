import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isFieldExists'
})
export class IsFieldExistsPipe implements PipeTransform {
  public transform(array: Array<any>, field: string): boolean {
    return array.some(item => item[field]);
  }
}
