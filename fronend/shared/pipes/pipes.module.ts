import { NgModule } from '@angular/core';

import { CurrencyRoundPipe } from './currency-round.pipe';
import { CurrencyPipe } from './currency.pipe';
import { NumeralsPipe } from './numerals.pipe';

const MODULES = [NumeralsPipe, CurrencyRoundPipe, CurrencyPipe];

@NgModule({
  declarations: MODULES,
  providers: MODULES,
  exports: MODULES
})
export class PipesModule {}
