import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContentExampleRoutingModule } from './ng-content-example-routing.module';
import { NgContentExampleComponent } from './components/ng-content-example/ng-content-example.component';
import { NgContentContainerComponent } from './components/ng-content-container/ng-content-container.component';


@NgModule({
  declarations: [
    NgContentExampleComponent,
    NgContentContainerComponent
  ],
  imports: [
    CommonModule,
    NgContentExampleRoutingModule
  ]
})
export class NgContentExampleModule { }
