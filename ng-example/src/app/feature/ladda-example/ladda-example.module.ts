import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaddaExampleRoutingModule } from './ladda-example-routing.module';
import { LaddaExampleComponent } from './example/ladda-example.component';
import { LaddaModule } from 'angular2-ladda';


@NgModule({
  declarations: [
    LaddaExampleComponent
  ],
  imports: [
    CommonModule,
    LaddaModule,
    LaddaExampleRoutingModule
  ]
})
export class LaddaExampleModule { }
