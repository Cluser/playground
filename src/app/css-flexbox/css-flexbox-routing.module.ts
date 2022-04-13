import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssFlexboxComponent } from './css-flexbox.component';

const routes: Routes = [
  {
    path: '',
    component: CssFlexboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssFlexboxRoutingModule {}
