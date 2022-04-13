import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ObservableComponent],
  imports: [CommonModule, ObservableRoutingModule, HttpClientModule],
})
export class ObservableModule {}
