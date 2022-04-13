import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveRoutingModule } from './directive-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DirectiveComponent } from './directive.component';

@NgModule({
  declarations: [DirectiveComponent],
  imports: [CommonModule, DirectiveRoutingModule, SharedModule],
})
export class DirectiveModule {}
