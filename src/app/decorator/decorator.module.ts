import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './decorator.component';
import { DecoratorRoutingModule } from './decorator-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    DecoratorRoutingModule,
    SharedModule
  ]
})
export class DecoratorModule { }
