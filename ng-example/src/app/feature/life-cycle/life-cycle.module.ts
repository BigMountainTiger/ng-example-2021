import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { LifeCycleContainerComponent } from './container/life-cycle-container.component';
import { LifeCycleBasicComponent } from './life-cycle-basic/life-cycle-basic.component';
import { NestedParentComponent } from './life-cycle-nested/nested-parent/nested-parent.component';
import { NestedChildComponent } from './life-cycle-nested/nested-child/nested-child.component';


@NgModule({
  declarations: [
    LifeCycleContainerComponent,
    LifeCycleBasicComponent,
    NestedParentComponent,
    NestedChildComponent
  ],
  imports: [
    CommonModule,
    LifeCycleRoutingModule
  ]
})
export class LifeCycleModule { }
