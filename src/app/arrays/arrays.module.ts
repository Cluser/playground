import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraysComponent } from './arrays.component';
import { ArraysRoutingModule } from './arrays-routing.module';

@NgModule({
  declarations: [ArraysComponent],
  imports: [CommonModule, ArraysRoutingModule],
})
export class ArraysModule {}
