import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx.component';
import { NgrxRoutingModule } from './ngrx-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgrxComponent],
  imports: [CommonModule, NgrxRoutingModule, FormsModule],
})
export class NgrxModule {}
