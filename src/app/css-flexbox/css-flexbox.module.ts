import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssFlexboxComponent } from './css-flexbox.component';
import { CssFlexboxRoutingModule } from './css-flexbox-routing.module';

@NgModule({
  declarations: [CssFlexboxComponent],
  imports: [CommonModule, CssFlexboxRoutingModule],
})
export class CssFlexboxModule {}
