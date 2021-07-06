import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrExampleRoutingModule } from './toastr-example-routing.module';
import { ToastrExampleComponent } from './components/toastr-example.component';


@NgModule({
  declarations: [
    ToastrExampleComponent
  ],
  imports: [
    CommonModule,
    ToastrExampleRoutingModule
  ]
})
export class ToastrExampleModule { }
