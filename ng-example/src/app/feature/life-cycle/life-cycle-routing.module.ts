import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCycleContainerComponent } from './container/life-cycle-container.component';
import { LifeCycleBasicComponent } from './life-cycle-basic/life-cycle-basic.component';
import { NestedParentComponent } from './life-cycle-nested/nested-parent/nested-parent.component';

const routes: Routes = [
  {
    path: '',
    component: LifeCycleContainerComponent,
    children: [
      {
        path: 'life-cycle-basic',
        component: LifeCycleBasicComponent
      },
      {
        path: 'life-cycle-nested',
        component: NestedParentComponent
      },
      {
        path: '**',
        redirectTo: 'life-cycle-basic'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleRoutingModule { }
