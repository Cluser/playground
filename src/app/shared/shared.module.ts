import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { UnitPipe } from './pipes/unit.pipe';

@NgModule({
  declarations: [HighlightDirective, ValidationErrorComponent, UnitPipe],
  imports: [CommonModule],
  exports: [HighlightDirective, ValidationErrorComponent, UnitPipe],
})
export class SharedModule {}
