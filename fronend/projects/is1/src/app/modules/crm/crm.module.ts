import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CrmRoutingModule } from './crm-routing.module';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatExpansionModule,
  MatTooltipModule,
  MatSnackBarModule
];

@NgModule({
  imports: [...materialModules, CommonModule, CrmRoutingModule]
})
export class CrmModule {}
