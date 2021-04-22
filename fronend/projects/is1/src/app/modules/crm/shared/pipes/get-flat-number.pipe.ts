import { Pipe, PipeTransform } from '@angular/core';

import { IFlatInfo } from '../interfaces';

@Pipe({
  name: 'getFlatNumber'
})
export class GetFlatNumberPipe implements PipeTransform {
  public transform(flatInfo: IFlatInfo): string {
    return flatInfo.studio ? flatInfo.rooms + '-к студия' : flatInfo.rooms + '-к квартира';
  }
}
