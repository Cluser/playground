import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpreadOperatorComponent } from './spread-operator.component';

const routes: Routes = [
  {
    path: '',
    component: SpreadOperatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpreadOperatorRoutingModule {}
