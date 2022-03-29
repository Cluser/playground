import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'promise', pathMatch: 'prefix' },
  {
    path: 'promise',
    loadChildren: () => import('./promise/promise.module').then(m => m.PromiseModule)
  },
  {
    path: 'observable',
    loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule)
  },
  {
    path: 'decorator',
    loadChildren: () => import('./decorator/decorator.module').then(m => m.DecoratorModule)
  },
  {
    path: 'subject',
    loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)
  },
  {
    path: "directive",
    loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule)
  }, 
  {
    path: "reactive-form",
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
