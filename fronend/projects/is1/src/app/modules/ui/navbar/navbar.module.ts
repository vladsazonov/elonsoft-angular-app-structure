import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar.component';

const materialModules = [MatToolbarModule];

@NgModule({
  imports: [...materialModules, CommonModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule {}
