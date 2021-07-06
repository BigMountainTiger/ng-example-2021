import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapExampleBasicComponent } from './components/bootstrap-example-basic/bootstrap-example-basic.component';
import { BootstrapExampleDatePickerComponent } from './components/bootstrap-example-date-picker/bootstrap-example-date-picker.component';
import { BootstrapExampleModalContainerComponent } from './components/bootstrap-example-modal/components/bootstrap-example-modal-container/bootstrap-example-modal-container.component';
import { BootstrapExampleContainerComponent } from './components/container/bootstrap-example-container.component';

const routes: Routes = [
  {
    path: '',
    component: BootstrapExampleContainerComponent,
    children: [
      {
        path: 'bootstrap-example-basic',
        component: BootstrapExampleBasicComponent
      },
      {
        path: 'bootstrap-example-date-picker',
        component: BootstrapExampleDatePickerComponent
      },
      {
        path: 'bootstrap-example-modal-container',
        component: BootstrapExampleModalContainerComponent
      },
      {
        path: '**',
        redirectTo: 'bootstrap-example-basic'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapExampleRoutingModule { }
