import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormValidationContainerComponent } from './components/container/form-validation-container.component';
import { FormValidationBasicComponent } from './components/form-validation-basic/form-validation-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationGroupComponent } from './components/form-validation-group/form-validation-group.component';
import { FormValidationBuilderComponent } from './components/form-validation-builder/form-validation-builder.component';
import { FormValidationDynamicComponent } from './components/form-validation-dynamic/form-validation-dynamic.component';


@NgModule({
  declarations: [
    FormValidationContainerComponent,
    FormValidationBasicComponent,
    FormValidationGroupComponent,
    FormValidationBuilderComponent,
    FormValidationDynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidationRoutingModule
  ]
})
export class FormValidationModule { }
