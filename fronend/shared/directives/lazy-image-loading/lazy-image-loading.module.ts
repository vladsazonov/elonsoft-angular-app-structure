import { NgModule } from '@angular/core';
import { LazyLoadDirective } from './lazy-image-loading.directive';

@NgModule({
  exports: [LazyLoadDirective],
  declarations: [LazyLoadDirective]
})
export class LazyLoadDirectiveModule {}
