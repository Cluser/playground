import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadOperatorComponent } from './spread-operator.component';
import { SpreadOperatorRoutingModule } from './spread-operator-routing.module';

@NgModule({
  declarations: [SpreadOperatorComponent],
  imports: [CommonModule, SpreadOperatorRoutingModule],
})
export class SpreadOperatorModule {}
