import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { PipeRoutingModule } from './pipe-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PipeComponent],
  imports: [CommonModule, PipeRoutingModule, SharedModule],
})
export class PipeModule {}
