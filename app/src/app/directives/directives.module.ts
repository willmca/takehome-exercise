import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialInputsDirective } from './financial-inputs.directive';



@NgModule({
  declarations: [FinancialInputsDirective],
  imports: [
    CommonModule
  ],
  exports: [FinancialInputsDirective]
})
export class DirectivesModule { }
