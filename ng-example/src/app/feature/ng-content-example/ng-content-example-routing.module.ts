import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentExampleComponent } from './components/ng-content-example/ng-content-example.component';

const routes: Routes = [
  {
    path: '',
    component: NgContentExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContentExampleRoutingModule { }
