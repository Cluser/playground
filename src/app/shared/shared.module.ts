import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';



@NgModule({
  declarations: [
    HighlightDirective,
    ValidationErrorComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HighlightDirective,
    ValidationErrorComponent
  ]
})
export class SharedModule { }
