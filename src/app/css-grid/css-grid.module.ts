import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssGridComponent } from './css-grid.component';
import { CssGridRoutingModule } from './css-grid-routing.module';

@NgModule({
  declarations: [CssGridComponent],
  imports: [CommonModule, CssGridRoutingModule],
})
export class CssGridModule {}
