import { NgModule } from '@angular/core';

import { GetFlatNumberPipe } from './get-flat-number.pipe';
import { IsFieldExistsPipe } from './is-field-exists.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  exports: [GetFlatNumberPipe, IsFieldExistsPipe, SafeHtmlPipe],
  declarations: [GetFlatNumberPipe, IsFieldExistsPipe, SafeHtmlPipe],
  providers: [GetFlatNumberPipe, IsFieldExistsPipe, SafeHtmlPipe]
})
export class ComplexPipesModule {}
