import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationBasicComponent } from './components/form-validation-basic/form-validation-basic.component';
import { FormValidationContainerComponent } from './components/container/form-validation-container.component';
import { FormValidationGroupComponent } from './components/form-validation-group/form-validation-group.component';
import { FormValidationBuilderComponent } from './components/form-validation-builder/form-validation-builder.component';
import { FormValidationDynamicComponent } from './components/form-validation-dynamic/form-validation-dynamic.component';

const routes: Routes = [
  {
    path: '',
    component: FormValidationContainerComponent,
    children: [
      {
        path: 'form-validation-basic',
        component: FormValidationBasicComponent
      },
      {
        path: 'form-validation-group',
        component: FormValidationGroupComponent
      },
      {
        path: 'form-validation-builder',
        component: FormValidationBuilderComponent
      },
      {
        path: 'form-validation-dynamic',
        component: FormValidationDynamicComponent
      },
      {
        path: '**',
        redirectTo: 'form-validation-basic'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule { }
